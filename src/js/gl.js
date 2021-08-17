import { CaseStudySceneManager } from './caseStudyManager';

if (document.querySelector('#case-studies-canvas')) {
  window.caseStudySceneManager = new CaseStudySceneManager(
    document.querySelector('#case-studies-canvas')
  );
  window.caseStudySceneManager.init();
}
