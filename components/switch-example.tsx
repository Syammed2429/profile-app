import * as React from "react";
import { View } from "react-native";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { EnhancedSwitch } from "~/components/ui/enhanced-switch";

export function SwitchExample() {
  const [checked, setChecked] = React.useState(false);
  const [enhancedChecked, setEnhancedChecked] = React.useState(false);

  return (
    <View className='space-y-8 flex gap-5'>
      {/* Regular Switch */}
      <View className='flex-row items-center gap-3'>
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          nativeID='airplane-mode'
        />
        <Label
          className='text-foreground'
          nativeID='airplane-mode'
          onPress={() => {
            setChecked((prev) => !prev);
          }}
        >
          Airplane Mode
        </Label>
      </View>

      {/* Enhanced Switch */}
      <View className='flex-row items-center gap-4'>
        <EnhancedSwitch
          checked={enhancedChecked}
          onCheckedChange={setEnhancedChecked}
          nativeID='enhanced-switch'
        />
        <Label
          className='text-foreground'
          nativeID='enhanced-switch'
          onPress={() => {
            setEnhancedChecked((prev) => !prev);
          }}
        >
          Enhanced Switch
        </Label>
      </View>
    </View>
  );
}
