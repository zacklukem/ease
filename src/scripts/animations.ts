// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence

/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
import * as constants from './constants'

export function reanimate(element: Element): JQuery<Element> {
    let e = $(element);

    if (e.hasClass(constants.easeActive.name)) {
        let copy: JQuery<Element> = e.clone(true);
        e.before(copy);
        e.remove();
        return copy;
    }
    else {
        e.addClass(constants.easeActive.name);
        return e;
    }
}

export function animate(element: Element): JQuery<Element> {
    let e = $(element);
    e.addClass(constants.easeActive.name);
    return e;
}
