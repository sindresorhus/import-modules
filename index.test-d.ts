import process from 'node:process';
import {expectType} from 'tsd';
import importModules from './index.js';

const currentDirectory: string = process.cwd();

expectType<Record<string, unknown>>(importModules());
expectType<Record<string, unknown>>(importModules(currentDirectory));
expectType<Record<string, unknown>>(importModules(currentDirectory, {fileExtensions: ['.js']}));
expectType<Record<string, unknown>>(importModules(currentDirectory, {camelize: false, fileExtensions: ['.js']}));
expectType<Record<string, unknown>>(importModules(currentDirectory, {fileExtensions: []}));
