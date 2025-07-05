import * as React from "react";
import { View } from "react-native";
import { Label } from "~/components/ui/label";
import { EnhancedSwitch } from "~/components/ui/enhanced-switch";
import { Sun } from "~/lib/icons/Sun";
import { MoonStar } from "~/lib/icons/MoonStar";
import { Text } from "./ui/text";

export function EnhancedSwitchExample() {
  const [themeSwitch, setThemeSwitch] = React.useState(false);
  const [wifiSwitch, setWifiSwitch] = React.useState(true);
  console.log("themeSwitch:", themeSwitch);

  return (
    <View className='space-y-6'>
      {/* Theme Switch with Icons */}
      <View className='flex-row items-center gap-3'>
        <EnhancedSwitch
          checked={themeSwitch}
          onCheckedChange={setThemeSwitch}
          leftIcon={<Text className='text-white text-xs'>ON</Text>}
          rightIcon={<Text className='text-gray-500 text-xs'>OFF</Text>}
          nativeID='theme-switch'
        />
        <Label
          className='text-foreground'
          nativeID='theme-switch'
          onPress={() => {
            setThemeSwitch((prev) => !prev);
          }}
        >
          Dark Mode
        </Label>
      </View>

      {/* WiFi Switch */}
      <View className='flex-row items-center gap-3'>
        <EnhancedSwitch
          checked={wifiSwitch}
          onCheckedChange={setWifiSwitch}
          leftIcon={<MoonStar size={12} className='text-white' />}
          rightIcon={<Sun size={12} className='text-yellow-500' />}
          nativeID='wifi-switch'
        />
        <Label
          className='text-foreground'
          nativeID='wifi-switch'
          onPress={() => {
            setWifiSwitch((prev) => !prev);
          }}
        >
          Theme Switch (Icons)
        </Label>
      </View>

      {/* Additional Example with mixed text and icons */}
      <View className='flex-row items-center gap-3'>
        <EnhancedSwitch
          checked={false}
          onCheckedChange={() => {}}
          leftIcon={<Text className='text-white text-xs font-bold'>YES</Text>}
          rightIcon={
            <Text className='text-gray-500 text-xs font-bold'>NO</Text>
          }
          nativeID='text-switch'
        />
        <Label className='text-foreground' nativeID='text-switch'>
          Text Only Switch
        </Label>
      </View>
    </View>
  );
}
