import * as React from "react";
import { Pressable, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";

interface EnhancedSwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  thumbIcon?: React.ReactNode;
  nativeID?: string;
}

const RGB_COLORS = {
  light: {
    primary: "#6A47EE",
    input: "#9CA3AF",
    background: "rgb(255, 255, 255)",
  },
  dark: {
    primary: "#6A47EE",
    input: "#9CA3AF",
    background: "rgb(24, 24, 27)",
  },
} as const;

export function EnhancedSwitch({
  checked,
  defaultChecked = false,
  onCheckedChange,
  disabled = false,
  className,
  leftIcon,
  rightIcon,
  thumbIcon,
  nativeID,
}: EnhancedSwitchProps) {
  const { colorScheme } = useColorScheme();
  const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked);

  // Animated values
  const translateX = useSharedValue(isChecked ? 26 : 0);
  const tapScale = useSharedValue(1);
  const leftIconScale = useSharedValue(isChecked ? 1 : 0);
  const rightIconScale = useSharedValue(isChecked ? 0 : 1);
  const thumbWidth = useSharedValue(28);

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
      translateX.value = withSpring(checked ? 26 : 0, {
        stiffness: 300,
        damping: 25,
      });
      leftIconScale.value = withSpring(checked ? 1 : 0);
      rightIconScale.value = withSpring(checked ? 0 : 1);
    }
  }, [checked, translateX, leftIconScale, rightIconScale]);

  const handlePress = React.useCallback(() => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onCheckedChange?.(newChecked);

    translateX.value = withSpring(newChecked ? 26 : 0, {
      stiffness: 300,
      damping: 25,
    });
    leftIconScale.value = withSpring(newChecked ? 1 : 0);
    rightIconScale.value = withSpring(newChecked ? 0 : 1);
  }, [
    isChecked,
    onCheckedChange,
    disabled,
    translateX,
    leftIconScale,
    rightIconScale,
  ]);

  const handlePressIn = React.useCallback(() => {
    if (disabled) return;
    thumbWidth.value = withTiming(30, { duration: 100 });
    tapScale.value = withSpring(0.95);
  }, [disabled, thumbWidth, tapScale]);

  const handlePressOut = React.useCallback(() => {
    thumbWidth.value = withTiming(28, { duration: 100 });
    tapScale.value = withSpring(1);
  }, [thumbWidth, tapScale]);

  // Animated styles
  const animatedRootStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      [0, 26],
      [RGB_COLORS[colorScheme].input, RGB_COLORS[colorScheme].primary]
    );

    return {
      backgroundColor,
      transform: [{ scale: tapScale.value }],
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: thumbWidth.value,
    backgroundColor: RGB_COLORS[colorScheme].background,
  }));

  const animatedLeftIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: leftIconScale.value }],
    opacity: leftIconScale.value,
  }));

  const animatedRightIconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: rightIconScale.value }],
    opacity: rightIconScale.value,
  }));

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      nativeID={nativeID}
      className={cn("relative", className)}
    >
      <Animated.View
        style={animatedRootStyle}
        className={cn(
          "relative flex-row h-8 w-[60px] p-[3px] items-center rounded-full",
          disabled && "opacity-50"
        )}
      >
        {/* Left Icon */}
        {leftIcon && (
          <Animated.View
            style={animatedLeftIconStyle}
            className='absolute left-1 top-1/2 -translate-y-1/2'
          >
            <View className='min-w-3 h-3 items-center justify-center'>
              {leftIcon}
            </View>
          </Animated.View>
        )}

        {/* Right Icon */}
        {rightIcon && (
          <Animated.View
            style={animatedRightIconStyle}
            className='absolute right-1 top-1/2 -translate-y-1/2'
          >
            <View className='min-w-3 h-3 items-center justify-center'>
              {rightIcon}
            </View>
          </Animated.View>
        )}

        {/* Thumb */}
        <Animated.View
          style={animatedThumbStyle}
          className='relative z-10 h-7 rounded-full shadow-lg items-center justify-center'
        >
          {thumbIcon && (
            <View className='w-3 h-3 items-center justify-center'>
              {thumbIcon}
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

export type { EnhancedSwitchProps };
