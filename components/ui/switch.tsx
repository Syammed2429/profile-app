import * as SwitchPrimitives from "@rn-primitives/switch";
import * as React from "react";
import { Platform, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import { useColorScheme } from "~/lib/useColorScheme";
import { cn } from "~/lib/utils";

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

function SwitchNative({
  className,
  ...props
}: SwitchPrimitives.RootProps & {
  ref?: React.RefObject<SwitchPrimitives.RootRef>;
}) {
  const { colorScheme } = useColorScheme();
  const translateX = useDerivedValue(() => (props.checked ? 28 : 0));

  const animatedRootStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        translateX.value,
        [0, 28],
        [RGB_COLORS[colorScheme].input, RGB_COLORS[colorScheme].primary]
      ),
    };
  });

  const animatedThumbStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(translateX.value, {
          stiffness: 300,
          damping: 30,
          mass: 2,
        }),
      },
    ],
  }));

  //  const animatedLeftIconStyle = useAnimatedStyle(() => ({
  //     transform: [{ scale: leftIconScale.value }],
  //     opacity: leftIconScale.value,
  //   }));

  const animatedYesTextStyle = useAnimatedStyle(() => ({
    opacity: withSpring(props.checked ? 1 : 0.4, {
      stiffness: 200,
      damping: 20,
    }),
    color: interpolateColor(
      translateX.value,
      [0, 28],
      ["rgba(156, 163, 175, 0.8)", "rgba(255, 255, 255, 1)"]
    ),
    transform: [
      {
        scale: withSpring(props.checked ? 1 : 0.8, {
          stiffness: 250,
          damping: 15,
        }),
      },
    ],
  }));

  const animatedNoTextStyle = useAnimatedStyle(() => ({
    opacity: withSpring(props.checked ? 0.4 : 1, {
      stiffness: 200,
      damping: 20,
    }),
    color: interpolateColor(
      translateX.value,
      [0, 28],
      ["rgba(75, 85, 99, 1)", "rgba(156, 163, 175, 0.6)"]
    ),
    transform: [
      {
        scale: withSpring(props.checked ? 0.8 : 1, {
          stiffness: 250,
          damping: 15,
        }),
      },
    ],
  }));

  return (
    <Animated.View
      style={animatedRootStyle}
      className={cn(
        "h-8 w-[70px] rounded-full transition-colors duration-200 relative",
        props.disabled && "opacity-50"
      )}
    >
      {/* Text Labels */}
      <View className='absolute inset-0 flex-row items-center justify-center z-0'>
        <View className='absolute left-2.5 flex items-center justify-center'>
          <Animated.Text
            style={animatedYesTextStyle}
            className='text-sm font-medium leading-none'
          >
            Yes
          </Animated.Text>
        </View>
        <View className='absolute right-2.5 flex items-center justify-center'>
          <Animated.Text
            style={animatedNoTextStyle}
            className='text-sm font-medium leading-none'
          >
            No
          </Animated.Text>
        </View>
      </View>

      <SwitchPrimitives.Root
        className={cn(
          "flex-row h-8 w-[70px] shrink-0 items-center rounded-full border-2 border-transparent relative z-10",
          className
        )}
        {...props}
      >
        <Animated.View style={animatedThumbStyle}>
          <SwitchPrimitives.Thumb
            className={
              "h-7 w-7 rounded-full bg-background shadow-lg shadow-foreground/25 ring-0"
            }
          />
        </Animated.View>
      </SwitchPrimitives.Root>
    </Animated.View>
  );
}

const Switch = Platform.select({
  default: SwitchNative,
});

export { Switch };
