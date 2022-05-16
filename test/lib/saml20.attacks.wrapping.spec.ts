import saml from '../../lib/index';
import { expect } from 'chai';
import fs from 'fs';

// Tests Configuration
// Evil response that wraps the valid response inside the Signature tag
const wrappedInvalidResponse1 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidResponse1.xml')
  .toString();

// Evil response that wraps the valid response
const wrappedInvalidResponse2 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidResponse2.xml')
  .toString();

// Evil assertion at the same level as the valid assertion
const wrappedInvalidAssertion1 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidAssertion1.xml')
  .toString();

// Evil assertion wraps the valid assertion
const wrappedInvalidAssertion2 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidAssertion2.xml')
  .toString();

// Evil assertion with signature wraps the valid assertion
const wrappedInvalidAssertion3 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidAssertion3.xml')
  .toString();

// Evil assertion inside Extensions tag
const wrappedInvalidExtensions1 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidExtensions1.xml')
  .toString();

// Evil assertion with signature inside Extensions tag
const wrappedInvalidExtensions2 = fs
  .readFileSync('./test/assets/attacks/wrapping/saml20.wrapped.invalidExtensions2.xml')
  .toString();

const certificate =
  'MIICajCCAdOgAwIBAgIBADANBgkqhkiG9w0BAQ0FADBSMQswCQYDVQQGEwJ1czETMBEGA1UECAwKQ2FsaWZvcm5pYTEVMBMGA1UECgwMT25lbG9naW4gSW5jMRcwFQYDVQQDDA5zcC5leGFtcGxlLmNvbTAeFw0xNDA3MTcxNDEyNTZaFw0xNTA3MTcxNDEyNTZaMFIxCzAJBgNVBAYTAnVzMRMwEQYDVQQIDApDYWxpZm9ybmlhMRUwEwYDVQQKDAxPbmVsb2dpbiBJbmMxFzAVBgNVBAMMDnNwLmV4YW1wbGUuY29tMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZx+ON4IUoIWxgukTb1tOiX3bMYzYQiwWPUNMp+Fq82xoNogso2bykZG0yiJm5o8zv/sd6pGouayMgkx/2FSOdc36T0jGbCHuRSbtia0PEzNIRtmViMrt3AeoWBidRXmZsxCNLwgIV6dn2WpuE5Az0bHgpZnQxTKFek0BMKU/d8wIDAQABo1AwTjAdBgNVHQ4EFgQUGHxYqZYyX7cTxKVODVgZwSTdCnwwHwYDVR0jBBgwFoAUGHxYqZYyX7cTxKVODVgZwSTdCnwwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQ0FAAOBgQByFOl+hMFICbd3DJfnp2Rgd/dqttsZG/tyhILWvErbio/DEe98mXpowhTkC04ENprOyXi7ZbUqiicF89uAGyt1oqgTUCD1VsLahqIcmrzgumNyTwLGWo17WDAa1/usDhetWAMhgzF/Cnf5ek0nK00m0YZGyc4LzgD0CROMASTWNg==';
const audience = 'http://sp.example.com/demo1/metadata.php';

describe('saml20.attacks.wrapping', function () {
  it('wrappedInvalidResponse1: Should fail with invalid assertion possible assertion wrapping', function (done) {
    saml.validateInternal(
      wrappedInvalidResponse1,
      {
        publicKey: certificate,
        audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect(err.message).to.equal('Invalid assertion. Possible assertion wrapping.');
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidResponse2: Should fail with invalid assertion possible assertion wrapping', function (done) {
    saml.validateInternal(
      wrappedInvalidResponse2,
      {
        publicKey: certificate,
        audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect(err.message).to.equal('Invalid assertion. Possible assertion wrapping.');
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidAssertion1: Should fail with invalid assertion possible assertion wrapping', function (done) {
    saml.validateInternal(
      wrappedInvalidAssertion1,
      {
        publicKey: certificate,
        audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect(err.message).to.equal('Invalid assertion. Possible assertion wrapping.');
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidAssertion2:Should fail with invalid assertion possible assertion wrapping', function (done) {
    saml.validateInternal(
      wrappedInvalidAssertion2,
      {
        publicKey: certificate,
        audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect(err.message).to.equal('Invalid assertion. Possible assertion wrapping.');
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidAssertion3: Should fail with invalid assertion possible assertion wrapping', function (done) {
    saml.validateInternal(
      wrappedInvalidAssertion3,
      {
        publicKey: certificate,
        audience: audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect('Invalid assertion. Possible assertion wrapping.').to.equal(err.message);
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidExtensions1: Should fail with invalid assertion', function (done) {
    saml.validateInternal(
      wrappedInvalidExtensions1,
      {
        publicKey: certificate,
        audience: audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect('Invalid assertion.').to.equal(err.message);
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });

  it('wrappedInvalidExtensions2: Should fail with invalid assertion', function (done) {
    saml.validateInternal(
      wrappedInvalidExtensions2,
      {
        publicKey: certificate,
        audience: audience,
        bypassExpiration: true,
      },
      function (err, profile) {
        expect(profile).to.not.be.ok;
        expect(err).to.be.ok;
        try {
          if (err) {
            expect('Invalid assertion.').to.equal(err.message);
          }
          done();
        } catch (error) {
          done();
        }
      }
    );
  });
});
