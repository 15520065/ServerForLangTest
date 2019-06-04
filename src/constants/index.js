import {css} from "glamor";

/**
 *  String
 */

//export const API_BASE_URL = '/api';

export const ACCESS_TOKEN = 'accessToken';

export const BARCODE_FONT_BASE_URL = 'qrcode-free.com/z';
export const API_ROOT = "https://codegenapi.tk:8443/api";

// export const API_ROOT = 'http://localhost:8443/api';
// export const BARCODE_FONT_BASE_URL = 'localhost:3000/z';

export const GG_ANALYTIC_CODE = 'UA-140040211-1';

/**
 *  Component
 */

export const languageDefault = {
    i18nDefault: 'vi',
    flagDefault: 'VN'
};

export const toastStyle = {
    className: css({
        borderRadius: "3px !important",
    }),
    progressClassName: css({
        borderRadius: "3px !important",
        borderTopLeftRadius: "0px !important"
    })
};

/**
 *  Model Label
 */

export const productLabel = {
    productName:'productName',
    sellPrice:'sellPrice',
    listedPrice:'listedPrice',
    shortDes:'shortDes',
    feature:'feature',
    detail:'detail',
    productLink:'productLink',
    imageArr:'imageArr',
};

export const vcardLabel = {
    avatar: 'avatar',

    name: 'name',
    shortDes: 'shortDes',

    facebook: 'facebook',
    twitter: 'twitter',
    instagram: 'instagram',
    linkedin: 'linkedin',

    email: 'email',
    mobile: 'mobile',
    phone: 'phone',
    fax: 'fax',

    address: 'address',
    company: 'company',
    job: 'job',
    city: 'city',
    zipCode: 'zipCode',
    country: 'country',

    tags:'tags'
};



