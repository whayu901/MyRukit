import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import ItemDetail from "..";

jest.useFakeTimers();

// Note: test renderer must be required after react-native.

const mock = {
  name: "test",
  episode: ["hello", "world"],
  created: "sekarang bos",
};

describe("test itemDetail", () => {
  describe("rendering", () => {
    it("should match to snapshot - Text Transaction", () => {
      const itemDetail = renderer.create(
        <>
          <ItemDetail item={mock} indexItem={1} />
        </>,
      );
      expect({
        itemDetail,
      }).toMatchSnapshot("itemDetail snapshot true");
    });
  });
});
