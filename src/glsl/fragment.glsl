precision mediump float;

varying vec2 vUv;
varying float vWave;
uniform sampler2D uTexture;
uniform float uOpacity;

void main() {
  float wave = vWave * 0.25;
  float r = texture2D(uTexture, vUv + wave).r;
  float g = texture2D(uTexture, vUv + wave * 0.5).g;
  float b = texture2D(uTexture, vUv).b;
  vec3 texture = vec3(r, g, b);
  gl_FragColor = vec4(texture, uOpacity);
}