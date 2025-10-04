import { useEffect, useRef } from "react";

// interface useOutsideClickProps {
//     handler: () => {};
//     listenCapturing?: boolean;
// }

// export function useOutsideClick(props: useOutsideClickProps) {
export function useOutsideClick(handler: () => {}, listenCapturing = true) {
    // const { handler, listenCapturing = true } = props
    const ref = useRef<null | HTMLElement>(null)

    useEffect(
        function () {
            function handleClick(e: MouseEvent) {
                if (ref.current && !ref.current.contains(e.target as Node)) {
                    handler()
                }
            }

            document.addEventListener("click", handleClick, listenCapturing)

            return () => document.removeEventListener("click", handleClick, listenCapturing)
        }, [handler, listenCapturing]
    )

    return ref;
}