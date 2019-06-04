import {action, observable} from 'mobx';
import agent from '../agent';

class InputDataStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        curInputDataRequest: undefined,
    };

    @action reset() {
        this.values.curInputDataRequest = undefined;
    }

    @action create() {
        this.inProgress = true;
        this.errors = undefined;

        return agent.InputData.save(this.values.curInputDataRequest)
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                agent.toastError();
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    @action update() {
        if (this.values.curInputDataRequest && this.values.curInputDataRequest.inputDataId) {
            this.inProgress = true;
            this.errors = undefined;

            return agent.InputData.update(this.values.curInputDataRequest)
                .catch(action((err) => {
                    this.errors = err.response && err.response.body && err.response.body.errors;
                    agent.toastError();
                    throw err;
                }))
                .finally(action(() => {
                    this.inProgress = false;
                }));
        }
    }

    @action delete(inputDataId) {
        this.inProgress = true;
        this.errors = undefined;

        return agent.InputData.delete(inputDataId)
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                agent.toastError();
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    @action loadInputDataByInputDataCode(inputDataCode) {
        this.inProgress = true;
        this.errors = undefined;

        return agent.InputData.loadByInputDataCode(inputDataCode)
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.errors;
                agent.toastError();
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }
}

export default new InputDataStore();
