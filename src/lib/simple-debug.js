'use strict';

/**
 * Простые логи
 */

const DEBUG_ACTIVE = process.env.DEBUG;

function log (text, path, isError) {
  let date = (new Date()).toLocaleString('ru');

  return console[isError && 'error' || 'log'](`[${date}][${path}]`, text, '\n\n');
}

function wrapper (absolutePath) {
  let path = absolutePath.split('/').slice(-2).join('/');

  return {
    err: text => log(text, path, true), 
    out: text => DEBUG_ACTIVE ? log(text, path) : null
  }
}

module.exports = wrapper;