import * as adobeXd from './../src/svg/skills/adobe-xd.svg';

import adobeaudition from './../src/svg/skills/adobeaudition.svg';
import afterEffects from './../src/svg/skills/after-effects.svg';
import angular from './../src/svg/skills/angular.svg';
import aws from './../src/svg/skills/aws.svg';
import azure from './../src/svg/skills/azure.svg';
import blender from './../src/svg/skills/blender.svg';
import bootstrap from './../src/svg/skills/bootstrap.svg';
import bulma from './../src/svg/skills/bulma.svg';
import c from './../src/svg/skills/c.svg';
import canva from './../src/svg/skills/canva.svg';
import capacitorjs from './../src/svg/skills/capacitorjs.svg';
import coffeescript from './../src/svg/skills/coffeescript.svg';
import cplusplus from './../src/svg/skills/cplusplus.svg';
import csharp from './../src/svg/skills/csharp.svg';
import css from './../src/svg/skills/css.svg';
import dart from './../src/svg/skills/dart.svg';
import deno from './../src/svg/skills/deno.svg';
import django from './../src/svg/skills/django.svg';
import docker from './../src/svg/skills/docker.svg';
import fastify from './../src/svg/skills/fastify.svg';
import figma from './../src/svg/skills/figma.svg';
import firebase from './../src/svg/skills/firebase.svg';
import flutter from './../src/svg/skills/flutter.svg';
import gcp from './../src/svg/skills/gcp.svg';
import gimp from './../src/svg/skills/gimp.svg';
import git from './../src/svg/skills/git.svg';
import go from './../src/svg/skills/go.svg';
import graphql from './../src/svg/skills/graphql.svg';
import haxe from './../src/svg/skills/haxe.svg';
import html from './../src/svg/skills/html.svg';
import illustrator from './../src/svg/skills/illustrator.svg';
import ionic from './../src/svg/skills/ionic.svg';
import java from './../src/svg/skills/java.svg';
import javascript from './../src/svg/skills/javascript.svg';
import julia from './../src/svg/skills/julia.svg';
import kotlin from './../src/svg/skills/kotlin.svg';
import lightroom from './../src/svg/skills/lightroom.svg';
import markdown from './../src/svg/skills/markdown.svg';
import materialui from './../src/svg/skills/materialui.svg';
import matlab from './../src/svg/skills/matlab.svg';
import memsql from './../src/svg/skills/memsql.svg';
import microsoftoffice from './../src/svg/skills/microsoftoffice.svg';
import mongoDB from './../src/svg/skills/mongoDB.svg';
import mysql from './../src/svg/skills/mysql.svg';
import nextJS from './../src/svg/skills/nextJS.svg';
import nginx from './../src/svg/skills/nginx.svg';
import numpy from './../src/svg/skills/numpy.svg';
import nuxtJS from './../src/svg/skills/nuxtJS.svg';
import opencv from './../src/svg/skills/opencv.svg';
import photoshop from './../src/svg/skills/photoshop.svg';
import php from './../src/svg/skills/php.svg';
import picsart from './../src/svg/skills/picsart.svg';
import postgresql from './../src/svg/skills/postgresql.svg';
import premierepro from './../src/svg/skills/premierepro.svg';
import python from './../src/svg/skills/python.svg';
import pytorch from './../src/svg/skills/pytorch.svg';
import react from './../src/svg/skills/react.svg';
import ruby from './../src/svg/skills/ruby.svg';
import selenium from './../src/svg/skills/selenium.svg';
import sketch from './../src/svg/skills/sketch.svg';
import strapi from './../src/svg/skills/strapi.svg';
import svelte from './../src/svg/skills/svelte.svg';
import swift from './../src/svg/skills/swift.svg';
import tailwind from './../src/svg/skills/tailwind.svg';
import tensorflow from './../src/svg/skills/tensorflow.svg';
import typescript from './../src/svg/skills/typescript.svg';
import unity from './../src/svg/skills/unity.svg';
import vitejs from './../src/svg/skills/vitejs.svg';
import vue from './../src/svg/skills/vue.svg';
import vuetifyjs from './../src/svg/skills/vuetifyjs.svg';
import webix from './../src/svg/skills/webix.svg';
import wolframalpha from './../src/svg/skills/wolframalpha.svg';
import wordpress from './../src/svg/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}
