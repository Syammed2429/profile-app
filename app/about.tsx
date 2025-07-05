import { SwitchExample } from "@/components/switch-example";
import { EnhancedSwitchExample } from "@/components/enhanced-switch-example";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";

const About = () => {
  return (
    <View className='flex-1 bg-background p-6'>
      <Text className='text-2xl font-bold mb-6'>About</Text>

      <View className='space-y-8'>
        <View>
          <Text className='text-lg font-semibold mb-4 text-foreground'>
            Regular Switches
          </Text>
          <SwitchExample />
        </View>

        <View>
          <Text className='text-lg font-semibold mb-4 text-foreground'>
            Enhanced Switches
          </Text>
          <EnhancedSwitchExample />
        </View>
      </View>
    </View>
  );
};

export default About;
