import process from 'node:process';
import {expectType} from 'tsd';
import importModules, {Module} from './index.js';

const currentDirectory: string = process.cwd();

expectType<Partial<Record<string, Module>>>(importModules());
expectType<Partial<Record<string, Module>>>(importModules(currentDirectory));
expectType<Partial<Record<string, Module>>>(importModules(currentDirectory, {fileExtensions: ['.js']}));
expectType<Partial<Record<string, Module>>>(importModules(currentDirectory, {camelize: false, fileExtensions: ['.js']}));
expectType<Partial<Record<string, Module>>>(importModules(currentDirectory, {fileExtensions: []}));
