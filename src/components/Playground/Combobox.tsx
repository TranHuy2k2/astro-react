import { Combobox, Portal } from "@ark-ui/react";

interface Item {
  label: string;
  value: string;
  disabled?: boolean;
}

export default function CustomCombobox() {
  const items: Item[] = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte", disabled: true },
  ];
  return (
    <Combobox.Root items={items} multiple className="bg-gray-100 rounded p-4">
      <Combobox.Label className="text-lg font-semibold">
        Framework
      </Combobox.Label>
      <Combobox.Control className="flex items-center space-x-2">
        <Combobox.Input className="border p-2 rounded" />
        <Combobox.Trigger className="text-xl cursor-pointer">
          Open
        </Combobox.Trigger>
        <Combobox.ClearTrigger className="text-sm text-red-500">
          Clear
        </Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content className="bg-white rounded shadow-lg p-4">
            <Combobox.ItemGroup id="framework">
              <Combobox.ItemGroupLabel
                htmlFor="framework"
                className="text-base font-medium"
              >
                Frameworks
              </Combobox.ItemGroupLabel>
              {items.map((item) => (
                <Combobox.Item
                  key={item.value}
                  item={item}
                  className="p-2 hover:bg-gray-200"
                >
                  <Combobox.ItemText className="text-base">
                    {item.label}
                  </Combobox.ItemText>
                  <Combobox.ItemIndicator className="text-green-500">
                    ✓
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
