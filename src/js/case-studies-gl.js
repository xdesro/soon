import { CaseStudySceneManager } from './caseStudyManager';

if (document.querySelector('#case-studies-canvas')) {
  window.caseStudySceneManager = new CaseStudySceneManager(
    document.querySelector('#case-studies-canvas')
  );
  caseStudySceneManager.init();
}

// if (window.caseStudiesScene) {
//   const mouseHandler = e => {
//     if (e.target.classList.contains('case-study-list-item__link')) {
//       const clientName = e.target.previousElementSibling.dataset.clientName;
//       window.caseStudiesScene.updateTexture(clientName);
//       window.caseStudiesScene.setOpacity(1);
//     } else {
//       window.caseStudiesScene.setOpacity(0);
//     }
//     window.caseStudiesScene.mouseHandler(e);
//   };
//   window.caseStudiesScene.init();
//   window.onmousemove = mouseHandler;
// }
