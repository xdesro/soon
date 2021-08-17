import Highway from '@dogstudio/highway';

import SessionManager from './sessionManager';

import Fade from './transition.fade';
import WorkListTransition from './transition.work';
import WritingListTransition from './transition.writing';
import PostTransition from './transition.post';
import ProjectTransition from './transition.project';

import { CaseStudySceneManager } from './caseStudyManager';

const sessionManager = new SessionManager();

const H = new Highway.Core({
  transitions: {
    default: Fade,
    'work-list-page': WorkListTransition,
    'writing-list-page': WritingListTransition,
    post: PostTransition,
    project: ProjectTransition
  }
});
H.on('NAVIGATE_END', ({ to, from, trigger, location }) => {
  sessionManager.mount();
  if (document.querySelector('#case-studies-canvas')) {
    window.caseStudySceneManager = new CaseStudySceneManager(
      document.querySelector('#case-studies-canvas')
    );
    window.caseStudySceneManager.init();
  }
});
