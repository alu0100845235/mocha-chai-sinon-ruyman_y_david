var expect = chai.expect;

describe("Longitud", function() {
  describe("Constructor", function() {
    it("Debería tener un tipo y un valor", function() {
      var long = new Longitud(5, 'M');
      expect(long.valor).to.equal(5);
      expect(long.tipo).to.equal("M");
    });
  });
  describe("Metros", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo M y un valor", function() {
        var m = new Metros(5);
        expect(m.valor).to.equal(5);
        expect(m.tipo).to.equal("M");
      });
    });

    describe("#toPulgadas", function() {
        it("Debería convertirse en Pulgadas", function() {
          var pulg = (new Metros(5)).toPulgadas();
          expect(Math.round(pulg.valor * 100) / 100).to.equal(196.85);
        });
      });
  });

  describe("Pulgadas", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo P y un valor", function() {
        var p = new Pulgadas(5);
        expect(p.valor).to.equal(5);
        expect(p.tipo).to.equal("P");
      });
    });

    describe("#toMetros", function() {
        it("Debería convertirse en Metros", function() {
          var pulg = (new Pulgadas(196.85)).toMetros();
          expect(Math.round(pulg.valor)).to.equal(5);
        });
      });
  });
});

describe("Temperatura", function() {
  describe("Constructor", function() {
    it("Debería tener un tipo y un valor", function() {
      var temp = new Temperatura(5, 'C');
      expect(temp.valor).to.equal(5);
      expect(temp.tipo).to.equal("C");
    });
  });

  describe("Celsius", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo C y un valor", function() {
        var c = new Celsius(5);
        expect(c.valor).to.equal(5);
        expect(c.tipo).to.equal("C");
      });
    });

    describe("#toFahrenheit", function() {
        it("Debería convertirse en Fahrenheit", function() {
          var far = (new Celsius(1)).toFahrenheit();
          expect(Math.round(far.valor * 100) / 100).to.equal(33.8);
        });
      });

      describe("#toKelvin", function() {
        it("Debería convertirse en Kelvin", function() {
          var kel = (new Celsius(1)).toKelvin();
          expect(Math.round(kel.valor * 100) / 100).to.equal(274.15);
        });
      });
  });

  describe("Fahrenheit", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo F y un valor", function() {
        var c = new Fahrenheit(1);
        expect(c.valor).to.equal(1);
        expect(c.tipo).to.equal("F");
      });
    });

    describe("#toCelsius", function() {
        it("Debería convertirse en Celsius", function() {
          var cel = (new Fahrenheit(1)).toCelsius();
          expect(Math.round(cel.valor * 100) / 100).to.equal(-17.22);
        });
      });

      describe("#toKelvin", function() {
        it("Debería convertirse en Kelvin", function() {
          var kel = (new Fahrenheit(1)).toKelvin();
          expect(Math.round(kel.valor * 100) / 100).to.equal(255.93);
        });
      });
  });

  describe("Kelvin", function() {
    describe("Constructor", function() {
      it("Debería tener un tipo K y un valor", function() {
        var c = new Kelvin(1);
        expect(c.valor).to.equal(1);
        expect(c.tipo).to.equal("K");
      });
    });

    describe("#toFahrenheit", function() {
        it("Debería convertirse en Fahrenheit", function() {
          var far = (new Kelvin(1)).toFahrenheit();
          expect(Math.round(far.valor * 100) / 100).to.equal(-457.87);
        });
      });

      describe("#toCelsius", function() {
        it("Debería convertirse en Celsius", function() {
          var cel = (new Kelvin(1)).toCelsius();
          expect(Math.round(cel.valor * 100) / 100).to.equal(-272.15);
        });
      });
  });
});
