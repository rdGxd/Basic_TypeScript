export class Calculadora {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
  mul(n: number): this {
    this.number *= n;
    return this;
  }
}

// o THIS dessa sub calculadora é a SubCalculadora
export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
// Só é possível fazer chamadas em cadeias pq eu estou retornando o this
calculadora.add(5).mul(2).div(2).sub(5).pow(2);
console.log(calculadora);

// Builder - GoF
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setURL(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder(); // Builder
request.setURL('http://google.com.br').setMethod('post').send();
