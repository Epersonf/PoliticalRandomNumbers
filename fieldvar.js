class FieldVar {
    constructor(idclass, defaultValue) {
        this.elem = document.querySelector(idclass);
        this.elem.value = defaultValue;
        this.value = defaultValue;
        this.elem.addEventListener("change", () => this.setValue(this.elem.value));
    }

    getValue() {
        return this.value;
    }

    getInt() {
        return parseInt(this.value);
    }

    getFloat() {
        return parseFloat(this.value);
    }

    setValue(v) {
        this.value = v;
    }
}