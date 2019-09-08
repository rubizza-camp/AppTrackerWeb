export const vertex_shader =
  `
  attribute vec4 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;

  varying highp vec4 vPosition;

  void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    vPosition = gl_Position;
  }
`;

export const fragment_shader =
  `
  varying highp vec4 vPosition;

  uniform highp float uAaPosition;
  uniform highp float uBbPosition;

  highp float map(int value,float x1,float x2,float y1,float y2) {
    return (y2*(float(value)-x1)+y1*(x2-float(value)))/(x2-x1);
  }

  void main() {
    highp float a = vPosition.x;
    highp float b = vPosition.y;

    highp float ca = a;
    highp float cb = b;

    highp int n = 0;

    for(highp int i = 0; i < 100; i++)
    {
      n = i;

      highp float aa = a * a - b * b;
      highp float bb = 2.0 * a * b;

      a = aa + uAaPosition;
      b = bb + uBbPosition;

      if ((a*a + b*b) > 16.0)
      {
        break;
      }
    }

    highp float bright = sin(float(n)*3.14/100.0);

    gl_FragColor = vec4(bright*0.5,bright*0.5,bright*0.7,bright*0.6);
  }
  
`;