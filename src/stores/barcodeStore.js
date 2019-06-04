import {action, observable} from 'mobx';
import agent from '../agent';

class BarcodeStore {
    @observable inProgress = false;
    @observable errors = undefined;

    @observable values = {
        demoBarcode: [],
        demoBarcodeContent: undefined,
        imageProp: {
            imagePropColor: '#000000',
            imagePropFrame: 0,
            imagePropLogo: undefined,
        }
    };

    @action reset() {
        this.inProgress = false;
        this.errors = undefined;

        this.values.imageProp = this.checkImagePropNull(this.values.imageProp);

        this.values.demoBarcode = undefined;
        this.values.demoBarcodeContent = undefined;
    }

    checkImagePropNull = (imageProp) => {
        if (!imageProp) {
            return {
                imagePropColor: '#000000',
                imagePropFrame: 0,
                imagePropLogo: undefined,
            };
        }
        if (imageProp.imagePropLogo === null) {
            imageProp.imagePropLogo = undefined;
        }
        return imageProp;
    };


    @action setDemoBarcode(barcode, demoBarcodeContent) {
        this.values.demoBarcode = barcode;
        this.values.demoBarcodeContent = demoBarcodeContent;
    }

    @action generateStaticBarcode(content, imageProp) {
        this.inProgress = true;
        this.errors = undefined;

        imageProp = this.checkImagePropNull(imageProp);

        return agent.Barcode.generate(content, imageProp)
            .then((response) => {
                if (response.success) {
                    this.setDemoBarcode(response.value, content)
                }
            })
            .catch((errors) => {
                agent.toastError();
            })
            .finally(action(() => {
                this.inProgress = false;
            }));
    }

    @action generateInputDataBarcode(content, imageProp) {
        this.inProgress = true;
        this.errors = undefined;

        imageProp = this.checkImagePropNull(imageProp);

        return agent.Barcode.generate(content, imageProp)
            .catch((errors) => {
                agent.toastError();
            })
            .finally(action(() => {
                this.inProgress = false;
            }));
    }
}

export default new BarcodeStore();
