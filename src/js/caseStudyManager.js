import * as THREE from 'three';
import gsap from 'gsap';
import { mapRange } from './client-utils';
import vertexShader from '../glsl/vertex.glsl';
import fragmentShader from '../glsl/fragment.glsl';
// import imageList from '/img/images';

class CaseStudySceneManager {
  constructor(el) {
    this.scene = new THREE.Scene();
    this.raycaster = new THREE.Raycaster();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    this.camera.position.z = 2.0;

    this.renderer = new THREE.WebGLRenderer({
      canvas: el,
      antialias: true,
      alpha: true
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0xffffff, 0);

    this.clock = new THREE.Clock();

    this.onResize();
    this.imageList = [
      ...document.querySelectorAll('.case-study-list-item__image')
    ].map(img => ({ clientName: img.dataset.clientName, src: img.src }));
    this.images = [];
    this.textures = [];
    this.texIndex = 0;
    this.meshes = [];
    this.geometry = new THREE.PlaneGeometry(0.5, 0.5, 20, 20);
    this.material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.NormalBlending,
      uniforms: {
        uTime: { value: 0.0 },
        uTexture: { value: null },
        uOpacity: { value: 0.0 },
        hover: {
          type: 'f',
          value: 0.3
        }
      },
      //   wireframe: true,
      side: THREE.DoubleSide
    });
    this.mouseDown = false;
    this.mouseX = 0;
  }
  init() {
    this.loadImages();
    THREE.DefaultLoadingManager.onProgress = (item, loaded, total) => {
      if (loaded === total) {
        this.createMeshes();
      }
    };
    this.addEvents();
  }
  loadImages() {
    const textureLoader = new THREE.TextureLoader();

    this.imageList.forEach(img => {
      textureLoader.load(img.src, tex => {
        const { naturalHeight, naturalWidth } = tex.image;
        this.textures.push({ clientName: img.clientName, texture: tex });
      });
    });
  }
  createMeshes() {
    const meshCount = this.imageList.length;
    const material = this.material.clone();
    const mesh = new THREE.Mesh(this.geometry, material);
    //   mesh.position.x = i * 0.5;
    mesh.scale.set(
      1,
      this.textures[this.texIndex].texture.image.naturalHeight /
        this.textures[this.texIndex].texture.image.naturalWidth,
      1
    );

    material.uniforms.uTexture.value = this.textures[this.texIndex].texture;

    this.meshes.push(mesh);
    this.meshes.forEach(mesh => {
      this.scene.add(mesh);
    });
  }
  addEvents() {
    window.requestAnimationFrame(this.run.bind(this));
    window.addEventListener('mousemove', this.mouseHandler.bind(this));
    window.addEventListener('resize', this.onResize.bind(this), false);
  }
  onResize() {
    const { innerWidth, innerHeight } = window;

    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(innerWidth, innerHeight);
  }
  run() {
    requestAnimationFrame(this.run.bind(this));
    this.render();
  }
  render() {
    this.scene.children.forEach(child => {
      child.material.uniforms.uTime.value = this.clock.getElapsedTime();
    });

    this.renderer.render(this.scene, this.camera);
  }
  updateTexture(clientName) {
    // this.texIndex = index;
    this.scene.children.forEach(child => {
      child.material.uniforms.uTexture.value = this.textures.find(
        tex => tex.clientName === clientName
      ).texture;
    });
  }
  setOpacity(opacity) {
    this.scene.children.forEach(child => {
      gsap.to(child.material.uniforms.uOpacity, {
        value: opacity,
        duration: 0.2
      });
    });
  }
  mouseHandler(e) {
    const { scene, meshes, raycaster, camera, renderer } = this;
    gsap.to(camera.position, {
      x: mapRange(e.clientX, 0, window.innerWidth, -0.7, 0.7) * -1,
      y: mapRange(e.clientY, 0, window.innerHeight, 0.7, -0.7) * -1,
      duration: 0.5
    });
    if (e.target?.classList.contains('case-study-list-item__link')) {
      const clientName = e.target.previousElementSibling.dataset.clientName;
      this.updateTexture(clientName);
      this.setOpacity(1);
    } else {
      this.setOpacity(0);
    }
  }
}

export { CaseStudySceneManager };
