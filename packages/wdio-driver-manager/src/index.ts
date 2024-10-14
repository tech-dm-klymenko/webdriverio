import { startWebDriver } from './startWebDriver.js'
import type { Capabilities } from '@wdio/types'

// import WorkerInstance from '@wdio/local-runner'

const binaryDriversPool = new Map()

export class DriverManagerClient {

    constructor() {

    }
    // TODO-my: probably need to remove
    // createWorkerInstance(config: any, workerOptions: any, stdout: any, stderr: any) {
        // return new WorkerInstance(config, workerOptions, stdout, stderr)
    // }

    /**
     *
     * Start binary process and add it to pool, linking it with worker process by workerUuid
     */
    async startProcess(workerUuid: string, options: Capabilities.RemoteConfig) {
        const binaryDriverProcess = await startWebDriver(options)
        binaryDriversPool.set(workerUuid, binaryDriverProcess)
    }

    stopProcess(workerUuid: string) {
        throw new Error('Not implemented')
    }

    /**
     *
     * Get process binary id for linked worker process from pool by workerUuid
     */
    getProcessId(workerUuid: string) {
        return binaryDriversPool.get(workerUuid).pid
    }

}

export class DriverManagerServer {
    constructor() {

    }
}

