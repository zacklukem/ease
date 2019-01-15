// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence

interface Selector {
    name: string;
    sel: string;
}

class ClassSelector implements Selector {
    name: string;
    sel: string;
    constructor(name: string) {
        this.name = name;
        this.sel = '.' + name;
    }
}

class Attribute {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// Selectors
export const easeActive: Selector = new ClassSelector('ease-active');
export const animateOnClick: Selector = new ClassSelector('animate-onclick');
export const animateOnVisible: Selector = new ClassSelector('animate-onvisible');
export const animateOnEnter: Selector = new ClassSelector('animate-onenter');

// Attributes
export const dataVisible: Attribute = new Attribute('data-visible');
