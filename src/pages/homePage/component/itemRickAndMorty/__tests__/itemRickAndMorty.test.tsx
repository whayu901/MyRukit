import { Alert } from "react-native";
import React from "react";
import renderer from "react-test-renderer";

import ItemRickAndMorty from "..";

jest.useFakeTimers();

// Note: test renderer must be required after react-native.

const mock = {
  id: 0,
  name: "wahyu",
  species: "human",
  status: "alive",
  type: "none",
  gender: "man",
  origin: {
    name: "none",
    url: "https",
  },
  location: {
    name: "none",
    url: "https",
  },
  image: "none",
  url: "non",
  created: "none",
  episode: ["hello", "world"],
};

describe("test ItemRickAndMorty", () => {
  describe("rendering", () => {
    it("should match to snapshot ItemRickAndMorty", () => {
      const temRickAndMorty = renderer.create(
        <>
          <ItemRickAndMorty
            indexItem={10}
            onPress={() => Alert.alert("hello")}
            item={mock}
          />
        </>,
      );
      expect({
        temRickAndMorty,
      }).toMatchSnapshot("ItemRickAndMorty snapshot true");
    });
  });
});
