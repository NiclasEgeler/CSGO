export class Reader {
  private index: number;
  private buffer: Uint8Array;

  constructor(buffer: Uint8Array) {
    this.buffer = buffer;
    for (var i = 0; i < 4; i++) {
      if (buffer[i] != 0xFF) {
        throw new Error("Invalid Buffer");
      }
    }
    this.index = 4; //skip base
    
  }

  public readByte(): number {
    return +new Number(this.nextSub(1));
  }

  public readInt(): number {
    var sub = this.nextSub(2);
    return +new Number(this.getHexFromBuffer(sub));
  }

  public readShort(): number {
    var sub = this.nextSub(2);
    return +new Number(this.getHexFromBuffer(sub));
  }

  public readLong(): number {
    var sub = this.nextSub(4);
    return +new Number(this.getHexFromBuffer(sub));
  }

  public readLongLong(): bigint {
    var sub = this.nextSub(8);
    return BigInt(this.getHexFromBuffer(sub));
  }

  public readString(): string {
    var len = 0;
    while (this.buffer[this.index + len] != 0x00) {
      len++;
    }
    var ret = new TextDecoder().decode(this.nextSub(len));
    this.index++;
    return ret;
  }

  private getHexFromBuffer(buffer: Uint8Array) : string {
    var hex: string[] = [];
    buffer = buffer.reverse();
    for (var i of buffer) {
      var h: string = i.toString(16);
      if (h.length % 2) {
        h = "0" + h;
      }
      hex.push(h);
    }
    return "0x" + hex.join("");
  }

  private nextSub(len: number): Uint8Array {
    this.index += len;
    if (this.index > this.buffer.length) {
      throw new Error("Index out of Bounds");
    }
    const ret = this.buffer.subarray(this.index - len, this.index);
    return ret;
  }

  public hasNext(): boolean {
    return this.index < this.buffer.length
  }
}
