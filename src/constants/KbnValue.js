export const KbnValue = {
    INPUT_TYPE_CUSTOM: {name: "INPUT_TYPE_CUSTOM", value: "Custom Page"},
    INPUT_TYPE_URL_STATIC: {name: "INPUT_TYPE_URL_STATIC", value: "Static Url"},
    INPUT_TYPE_URL_DYNAMIC: {name: "INPUT_TYPE_URL_DYNAMIC", value: "Dynamic Url"},
    INPUT_TYPE_PRODUCT: {name: "INPUT_TYPE_PRODUCT", value: "Product Page"},
    INPUT_TYPE_VCARD: {name: "INPUT_TYPE_VCARD", value: "vCard Page"},
    INPUT_TYPE_TEXT: {name: "INPUT_TYPE_TEXT", value: "Text"},
    INPUT_TYPE_EMAIL: {name: "INPUT_TYPE_EMAIL", value: "Email"},
    INPUT_TYPE_SMS: {name: "INPUT_TYPE_SMS", value: "SMS"},
    INPUT_TYPE_FACEBOOK: {name: "INPUT_TYPE_FACEBOOK", value: "Facebook Profile"},
    INPUT_TYPE_PDF: {name: "INPUT_TYPE_PDF", value: "PDF Reader"},
    INPUT_TYPE_MP3: {name: "INPUT_TYPE_MP3", value: "MP3 Player"},
    INPUT_TYPE_APP: {name: "INPUT_TYPE_APP", value: "Application"},
    INPUT_TYPE_IMAGE: {name: "INPUT_TYPE_IMAGE", value: "Image Viewer"},

    INPUT_DETAIL_TYPE_TEXT: {name: "INPUT_DETAIL_TYPE_TEXT", value: "INPUT_DETAIL_TYPE_TEXT"},
    INPUT_DETAIL_TYPE_IMAGE_BASE64: {name: "INPUT_DETAIL_TYPE_IMAGE_BASE64", value: "INPUT_DETAIL_TYPE_IMAGE_BASE64"}
};

export const getKbnValue = (str) => {
    for (const index of Object.keys(KbnValue)) {
        if (KbnValue[index].name === str) {
            return KbnValue[index].value;
        }
    }
    return "Value not found"
};