import { Brizy } from "@brizy/core";

export const mapComponent = (props: any) => {
  const { address, zoom } = props;
  const URL = "https://www.google.com/maps/embed/v1/place";
  const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";
  const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div className="mapThirdComponent" style={{ pointerEvents: "none" }}>
      <iframe className="" src={iframeSrc} title="map" />
    </div>
  );
};

Brizy.registerComponent(mapComponent, {
  id: "myComp",
  title: "map",
  category: "custom",
  options: (props) => {
    return [
      {
        selector: ".mapThirdComponent",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-pin",
              title: "Map",
            },
            devices: "desktop",
            position: 90,
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "Map",
                    options: [
                      {
                        id: "address",
                        label: "Address",
                        type: "inputText",
                        placeholder: "Enter address",
                        default: {
                          value: "Chisinau",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  },
});
