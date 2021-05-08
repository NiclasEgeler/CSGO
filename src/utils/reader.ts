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
    return +new Number(this.nextSub(2));
  }

  public readShort(): number {
    return +new Number(this.nextSub(2));
  }

  public readLong(): number {
    return +new Number(this.nextSub(4));
  }

  public readLongLong(): bigint {
    var sub = this.nextSub(8);
    var hex: string[] = [];
    for (var i of sub) {
      var h: string = i.toString(16);
      if (h.length % 2) {
        h = "0" + h;
      }
      hex.push(h);
    }
    return BigInt("0x" + hex.join(""));
  }

  public readString(): string {
    var len = 0;
    while (this.buffer[this.index + len] != 0x00) {
      len++;
    }
    len++;
    return new TextDecoder().decode(this.nextSub(len));
  }

  private nextSub(len: number): Uint8Array {
    this.index += len;
    if (this.index >= this.buffer.length) {
      throw new Error("Index out of Bounds");
    }
    const ret = this.buffer.subarray(this.index - len, this.index);
    return ret;
  }
}
