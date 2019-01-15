// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence

/// <reference path="../../node_modules/@types/jquery/JQuery.d.ts" />
import {animate, reanimate} from "./animations";
import * as constants from "./constants"

$(() => {

    $(constants.animateOnClick.sel).click(function () {
        reanimate(this);
    });

    $(constants.animateOnVisible.sel).each(function (i, obj) {
        const jObj = $(obj);
        const top_of_element = jObj.offset().top;
        const bottom_of_element = jObj.offset().top + jObj.outerHeight();
        const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        const top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            animate(obj);
        }
    });

    $(constants.animateOnEnter.sel).each(function (i, obj) {
        const jObj = $(obj);
        const top_of_element = jObj.offset().top;
        const bottom_of_element = jObj.offset().top + jObj.outerHeight();
        const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        const top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            jObj.attr(constants.dataVisible.name, 'true');
        }
        else {
            jObj.attr(constants.dataVisible.name, 'false');
        }
    });

    $(window).scroll(function() {
        $(constants.animateOnVisible.sel).each(function (i, obj) {
            const jObj = $(obj);
            const top_of_element = jObj.offset().top;
            const bottom_of_element = jObj.offset().top + jObj.outerHeight();
            const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            const top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                animate(obj);
            }
        });

        $(constants.animateOnEnter.sel).each(function (i, obj) {
            let jObj: JQuery<Element> = $(obj);
            const top_of_element = jObj.offset().top;
            const bottom_of_element = jObj.offset().top + jObj.outerHeight();
            const bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            const top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                if (jObj.attr(constants.dataVisible.name) === 'false')
                    jObj = reanimate(obj);
                jObj.attr(constants.dataVisible.name, "true");
            }
            else {
                jObj.attr(constants.dataVisible.name, "false");
            }
        });

    });

});
