import {EventPayload, JitsuClient, jitsuClient, JitsuOptions} from '@jitsu/sdk-js'
import {useEffect, useMemo} from "react";
import { useLocation } from 'react-router-dom'

export type UseJitsu = {
    jitsu: JitsuClient
}


export function useJitsu(opts: JitsuOptions): UseJitsu {
    const jitsu = useMemo(() => jitsuClient(opts), [opts]);
    return { jitsu }
}

export function usePageView(jitsu: JitsuClient, event?: EventPayload) {
    let location = useLocation();

    useEffect(() => {
            jitsu.track('pageview');
        }, [location, jitsu]
    );
}