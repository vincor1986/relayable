export const URL_REGEX = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g;

export const VARIABLE_REGEX = /<<var:([^>]+)>>/g;

export const CONDITIONAL_REGEX = /if .+[:,] /gi;
