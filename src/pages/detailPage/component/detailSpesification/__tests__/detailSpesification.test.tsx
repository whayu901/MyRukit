import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import DetailSpesification from "../index";

jest.useFakeTimers();

// Note: test renderer must be required after react-native.

describe("test detail spesification", () => {
  describe("rendering", () => {
    it("should match to snapshot", () => {
      const detailSpesification = renderer.create(
        <>
          <DetailSpesification
            species="test1"
            gender="laki-laki"
            status="alive"
          />
        </>,
      );
      expect({
        detailSpesification,
      }).toMatchSnapshot("Text DetailSpesification snapshot true");
    });
  });
});
