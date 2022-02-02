uniform float time;
uniform float progress;
uniform vec4 resolution;
uniform sampler2D noiseTexture;
uniform sampler2D texture01;
uniform sampler2D texture02;
varying vec2 vUv;

void main() {
    // vec2 newUV = (vUv - vec2(.5)) *resolution.zw * vec2(.5);
//    vec2 updateUv = vUv + vec2(
//    (1.0 - imgRatio.x) * 0.5,
//    (1.0 - imgRatio.y) * 0.5
//    );

    vec4 image = texture2D(noiseTexture, vUv);
    float noiseR = texture2D(noiseTexture, vUv + vec2(time * 0.1, .0)).r;
    gl_FragColor = vec4(1., .38, .0, smoothstep(.4, .6, noiseR));

//    gl_FragColor = vec4(vUv, 0., 1.);
}
