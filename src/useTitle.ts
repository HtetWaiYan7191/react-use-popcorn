import { useEffect } from "react";

export function useTitle(title:string) {
    useEffect(() => {
        document.title = `Movie | ${title}`

        return (() => document.title = 'usePopCorn')
    }, [title])
}