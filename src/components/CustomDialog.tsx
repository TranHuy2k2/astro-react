import { button } from "@/variants";
import { Dialog, Portal } from "@ark-ui/react";
import { useEffect, useRef, useState } from "react";

export default function CustomDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen && dialogRef.current) {
      dialogRef.current.classList.remove("animate__wobble");
      dialogRef.current.classList.add("animate__bounceOut");
    } else {
      dialogRef.current?.classList.remove("animate__bounceOut");
      dialogRef.current?.classList.add("animate__wobble");
    }
  }, [isOpen]);
  return (
    <div className="flex justify-center mt-5">
      <button
        className={button({
          color: "primary",
          size: "md",
        })}
        onClick={() => setIsOpen(true)}
      >
        Open Dialog
      </button>
      <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Dialog.Backdrop className="fixed inset-0 bg-black opacity-50 z-[100]" />
          <Dialog.Positioner className="fixed inset-0 flex items-center justify-center z-[100]">
            <Dialog.Content
              ref={dialogRef}
              className="bg-white rounded-lg p-6 max-w-sm mx-auto z-30 animate__animated"
            >
              <Dialog.Title className="text-xl font-bold mb-2">
                Dialog Title
              </Dialog.Title>
              <Dialog.Description className="text-gray-500 mb-4">
                Dialog Description
              </Dialog.Description>
              <Dialog.CloseTrigger className="text-blue-500 cursor-pointer">
                Close
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </div>
  );
}
