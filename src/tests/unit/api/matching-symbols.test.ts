import { IBApi } from "../../../api/api";
import ContractDescription from "../../../api/contract/contractDescription";
import { EventName } from "../../../api/data/enum/event-name";
import configuration from "../../../common/configuration";

describe("IBApi reqMatchingSymbols Tests", () => {
  jest.setTimeout(5000);

  let ib: IBApi;
  const clientId = Math.floor(Math.random() * 32766) + 1; // ensure unique client

  beforeEach(() => {
    ib = new IBApi({
      host: configuration.ib_host,
      port: configuration.ib_port,
      clientId,
    });
  });

  afterEach(() => {
    if (ib) {
      ib.disconnect();
      ib = undefined;
    }
  });

  test("SPY", (done) => {
    const refId = 1;
    ib.once(EventName.nextValidId, (_reqId) => {
      ib.reqMatchingSymbols(refId, "SPY");
    })
      .on(
        EventName.symbolSamples,
        (reqId, contractDescriptions: ContractDescription[]) => {
          expect(reqId).toEqual(refId);
          expect(contractDescriptions[0].contract.symbol).toEqual("SPY");
          ib.disconnect();
        },
      )
      .on(EventName.disconnected, () => {
        done();
      })
      .on(EventName.error, (err, code, id) => {
        done(`${err.message} - code: ${code} - id: ${id}`);
      });

    ib.connect();
  });

  test("META", (done) => {
    const refId = 2;
    ib.once(EventName.nextValidId, (_reqId) => {
      ib.reqMatchingSymbols(refId, "META");
    })
      .on(
        EventName.symbolSamples,
        (reqId, contractDescriptions: ContractDescription[]) => {
          expect(reqId).toEqual(refId);
          expect(contractDescriptions[0].contract.symbol).toEqual("META");
          ib.disconnect();
        },
      )
      .on(EventName.disconnected, () => {
        done();
      })
      .on(EventName.error, (err, code, id) => {
        done(`${err.message} - code: ${code} - id: ${id}`);
      });

    ib.connect();
  });

  test("AMC", (done) => {
    const refId = 3;
    ib.once(EventName.nextValidId, (_reqId) => {
      ib.reqMatchingSymbols(refId, "AMC");
    })
      .on(
        EventName.symbolSamples,
        (reqId, contractDescriptions: ContractDescription[]) => {
          expect(reqId).toEqual(refId);
          expect(contractDescriptions[0].contract.symbol).toEqual("AMC");
          ib.disconnect();
        },
      )
      .on(EventName.disconnected, () => {
        done();
      })
      .on(EventName.error, (err, code, id) => {
        done(`${err.message} - code: ${code} - id: ${id}`);
      });

    ib.connect();
  });
});
