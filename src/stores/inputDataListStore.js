import {action, observable} from 'mobx';
import agent from '../agent';

class InputDataListStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        inputDataList: [],
        // inputDataListFind: [],
        page: 0,
        size: 10,
        totalElements: 0,
        totalPages: 0,
        last: true,     // last page
    };

    @action setInputDataList(inputDataList) {
        this.values.inputDataList = inputDataList;
    }

    @action reset() {
        this.values.inputDataList = [];
        this.values.page = 0;
        this.values.size = 10;
        this.values.totalElements = 0;
        this.values.totalPages = 0;
        this.values.last = true;
    }

    setValue = (response) => {
        // get the old list to add load more into
        let oldInputDataList = [];
        if (this.values.inputDataList)
            oldInputDataList = this.values.inputDataList.slice();

        this.values.inputDataList = oldInputDataList.concat(response.content).slice();
        this.values.page = response.page;
        this.values.size = response.size;
        this.values.totalElements = response.totalElements;
        this.values.totalPages = response.totalPages;
        this.values.last = response.last;
    };

    @action getInputDataList(page, size) {
        this.inProgress = true;
        this.errors = undefined;

        return agent.InputDataList.getInputDataList(page, size)
            .then((response) =>{
                this.setValue(response)
            })
            .catch(action((err) => {
                this.errors = err.response && err.response.body && err.response.body.message;
                agent.toastError();
                throw err;
            }))
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    // @action findInputDataList(page) {
    //     this.inProgress = true;
    //     this.errors = undefined;
    //
    //     return agent.InputDataList.findInputDataList(page)
    //         .then((response) =>{
    //             this.values.inputDataListFind = response;
    //         })
    //         .catch(action((err) => {
    //             this.errors = err.response && err.response.body && err.response.body.message;
    //             agent.toastError();
    //             throw err;
    //         }))
    //         .finally(action(() => {
    //             this.inProgress = false;
    //         }));
    // }
}

export default new InputDataListStore();
