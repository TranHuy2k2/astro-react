import { DatePicker, Portal } from "@ark-ui/react";

export default function CustomDatePicker() {
  return (
    <DatePicker.Root className="bg-gray-100 rounded p-4 mt-5">
      <DatePicker.Label className="text-lg font-semibold">
        Label
      </DatePicker.Label>
      <DatePicker.Control className="flex items-center space-x-2">
        <DatePicker.Input className="border p-2 rounded" />
        <DatePicker.Trigger className="text-xl cursor-pointer">
          📅
        </DatePicker.Trigger>
        <DatePicker.ClearTrigger className="text-sm text-red-500">
          Clear
        </DatePicker.ClearTrigger>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content className="bg-white rounded shadow-lg p-4">
            <DatePicker.YearSelect />
            <DatePicker.MonthSelect />
            <DatePicker.View view="day">
              {(api) => (
                <>
                  <DatePicker.ViewControl className="flex items-center justify-between">
                    <DatePicker.PrevTrigger className="text-sm text-blue-500">
                      Prev
                    </DatePicker.PrevTrigger>
                    <DatePicker.ViewTrigger className="text-base font-medium">
                      <DatePicker.RangeText />
                    </DatePicker.ViewTrigger>
                    <DatePicker.NextTrigger className="text-sm text-blue-500">
                      Next
                    </DatePicker.NextTrigger>
                  </DatePicker.ViewControl>
                  <DatePicker.Table className="w-full text-center">
                    <DatePicker.TableHead>
                      <DatePicker.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <DatePicker.TableHeader
                            key={id}
                            className="text-sm font-semibold"
                          >
                            {weekDay.short}
                          </DatePicker.TableHeader>
                        ))}
                      </DatePicker.TableRow>
                    </DatePicker.TableHead>
                    <DatePicker.TableBody>
                      {api.weeks.map((week, id) => (
                        <DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <DatePicker.TableCell
                              key={id}
                              value={day}
                              className="p-2"
                            >
                              <DatePicker.TableCellTrigger className="text-base">
                                {day.day}
                              </DatePicker.TableCellTrigger>
                            </DatePicker.TableCell>
                          ))}
                        </DatePicker.TableRow>
                      ))}
                    </DatePicker.TableBody>
                  </DatePicker.Table>
                </>
              )}
            </DatePicker.View>
            {/* ...rest of your code... */}
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
