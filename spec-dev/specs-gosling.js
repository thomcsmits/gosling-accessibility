module.exports = {


    //example Linear visual encoding
    example0: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "arrangement": "vertical",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
        "views": [
          {
            "tracks": [
              {
                "id": "track-1",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                  "binSize": 4
                },
                "mark": "rect",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "xe": {"field": "end", "type": "genomic"},
                "row": {"field": "sample", "type": "nominal", "legend": true},
                "color": {"field": "peak", "type": "quantitative", "legend": true},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-2",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "bar",
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-3",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "bar",
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative", "grid": true},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "id": "track-4",
            "alignment": "overlay",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
            },
            "x": {"field": "position", "type": "genomic", "axis": "top"},
            "y": {"field": "peak", "type": "quantitative"},
            "row": {"field": "sample", "type": "nominal"},
            "color": {"field": "sample", "type": "nominal", "legend": true},
            "tracks": [
              {"mark": "line"},
              {
                "mark": "point",
                "size": {"field": "peak", "type": "quantitative", "range": [0, 2]}
              }
            ],
            "tooltip": [
              {"field": "position", "type": "genomic", "alt": "Position"},
              {
                "field": "peak",
                "type": "quantitative",
                "alt": "Value",
                "format": ".2"
              },
              {"field": "sample", "type": "nominal", "alt": "Sample"}
            ],
            "width": 600,
            "height": 130
          },
          {
            "tracks": [
              {
                "id": "track-5",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "point",
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "size": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "opacity": {"value": 0.5},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-6",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "point",
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative", "grid": true},
                "size": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "opacity": {"value": 0.5},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-7",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "stroke": {"value": "white"},
                "strokeWidth": {"value": 0.5},
                "tooltip": [
                  {"field": "start", "type": "genomic", "alt": "Start Position"},
                  {"field": "end", "type": "genomic", "alt": "End Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-8",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                  "binSize": 4
                },
                "mark": "bar",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "xe": {"field": "end", "type": "genomic", "axis": "top"},
                "y": {"field": "peak_min", "type": "quantitative"},
                "ye": {"field": "peak_max", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "stroke": {"value": "black"},
                "strokeWidth": {"value": 0.2},
                "tooltip": [
                  {"field": "position", "type": "genomic", "alt": "Position"},
                  {
                    "field": "peak_min",
                    "type": "quantitative",
                    "alt": "min(Value)",
                    "format": ".2"
                  },
                  {
                    "field": "peak_max",
                    "type": "quantitative",
                    "alt": "max(Value)",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 600,
                "height": 130
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-9",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/circos-segdup-edited.txt",
                  "type": "csv",
                  "chromosomeField": "c2",
                  "genomicFields": ["s1", "e1", "s2", "e2"]
                },
                "mark": "withinLink",
                "x": {
                  "field": "s1",
                  "type": "genomic",
                  "domain": {"chromosome": "chr1", "interval": [103900000, 104100000]}
                },
                "xe": {"field": "e1", "type": "genomic"},
                "x1": {
                  "field": "s2",
                  "type": "genomic",
                  "domain": {"chromosome": "chr1"}
                },
                "x1e": {"field": "e2", "type": "genomic"},
                "color": {"field": "s1", "type": "nominal"},
                "stroke": {"value": "black"},
                "strokeWidth": {"value": 0.5},
                "opacity": {"value": 0.2},
                "width": 600,
                "height": 130
              }
            ]
          }
        ]
      },


    //example Circular visual encoding
    example1: {
        "title": "Visual Encoding in Circular Layouts",
        "subtitle": "Gosling provides diverse visual encoding methods in circular layouts",
        "layout": "circular",
        "arrangement": "vertical",
        "centerRadius": 0.5,
        "static": true,
        "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
        "views": [
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "id": "track-1",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                      "binSize": 4
                    },
                    "mark": "rect",
                    "x": {"field": "start", "type": "genomic", "axis": "top"},
                    "xe": {"field": "end", "type": "genomic"},
                    "row": {"field": "sample", "type": "nominal", "legend": true},
                    "color": {
                      "field": "peak",
                      "type": "quantitative",
                      "legend": true
                    },
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "id": "track-2",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "id": "track-3",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "id": "track-4",
                "alignment": "overlay",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "x": {"field": "position", "type": "genomic", "axis": "top"},
                "y": {"field": "peak", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "tracks": [
                  {"mark": "line"},
                  {
                    "mark": "point",
                    "size": {"field": "peak", "type": "quantitative", "range": [0, 2]}
                  }
                ],
                "tooltip": [
                  {"field": "position", "type": "genomic", "alt": "Position"},
                  {
                    "field": "peak",
                    "type": "quantitative",
                    "alt": "Value",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 350,
                "height": 130
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "id": "track-5",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "id": "track-6",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "id": "track-7",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                    },
                    "mark": "area",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "stroke": {"value": "white"},
                    "strokeWidth": {"value": 0.5},
                    "tooltip": [
                      {"field": "start", "type": "genomic", "alt": "Start Position"},
                      {"field": "end", "type": "genomic", "alt": "End Position"},
                      {
                        "field": "peak",
                        "type": "quantitative",
                        "alt": "Value",
                        "format": ".2"
                      },
                      {"field": "sample", "type": "nominal", "alt": "Sample"}
                    ],
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "id": "track-9",
                    "data": {
                      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/circos-segdup-edited.txt",
                      "type": "csv",
                      "chromosomeField": "c2",
                      "genomicFields": ["s1", "e1", "s2", "e2"]
                    },
                    "mark": "withinLink",
                    "x": {
                      "field": "s1",
                      "type": "genomic",
                      "domain": {
                        "chromosome": "chr1",
                        "interval": [103900000, 104100000]
                      }
                    },
                    "xe": {"field": "e1", "type": "genomic"},
                    "x1": {
                      "field": "s2",
                      "type": "genomic",
                      "domain": {"chromosome": "chr1"}
                    },
                    "x1e": {"field": "e2", "type": "genomic"},
                    "color": {"field": "s1", "type": "nominal"},
                    "stroke": {"value": "black"},
                    "strokeWidth": {"value": 0.5},
                    "opacity": {"value": 0.2},
                    "width": 350,
                    "height": 130
                  }
                ]
              }
            ]
          },
          {
            "tracks": [
              {
                "id": "track-8",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2"],
                  "binSize": 4
                },
                "mark": "bar",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "xe": {"field": "end", "type": "genomic", "axis": "top"},
                "y": {"field": "peak_min", "type": "quantitative"},
                "ye": {"field": "peak_max", "type": "quantitative"},
                "row": {"field": "sample", "type": "nominal"},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "stroke": {"value": "black"},
                "strokeWidth": {"value": 0.2},
                "tooltip": [
                  {"field": "position", "type": "genomic", "alt": "Position"},
                  {
                    "field": "peak_min",
                    "type": "quantitative",
                    "alt": "min(Value)",
                    "format": ".2"
                  },
                  {
                    "field": "peak_max",
                    "type": "quantitative",
                    "alt": "max(Value)",
                    "format": ".2"
                  },
                  {"field": "sample", "type": "nominal", "alt": "Sample"}
                ],
                "width": 350,
                "height": 130
              }
            ]
          }
        ]
      },


    //example Rule mark
    example2: {
        "title": "Rule Mark",
        "subtitle": "Annotate visualization with horizontal and vertical lines",
        "style": {"dashed": [3, 3]},
        "views": [
          {
            "alignment": "overlay",
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1"],
                  "binSize": 4
                },
                "mark": "bar",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative", "domain": [0, 0.003]},
                "color": {"value": "lightgray"}
              },
              {
                "data": {
                  "type": "json",
                  "values": [
                    {"c": "chr2", "p": 100000, "v": 0.0001},
                    {"c": "chr5", "p": 100000, "v": 0.0004},
                    {"c": "chr10", "p": 100000, "v": 0.0009}
                  ],
                  "chromosomeField": "c",
                  "genomicFields": ["p"]
                },
                "mark": "rule",
                "x": {"field": "p", "type": "genomic"},
                "y": {"field": "v", "type": "quantitative", "domain": [0, 0.003]},
                "strokeWidth": {"field": "v", "type": "quantitative"},
                "color": {"value": "red"}
              },
              {
                "data": {
                  "type": "json",
                  "values": [
                    {"c": "chr2", "p": 100000, "v": 0.0001},
                    {"c": "chr5", "p": 100000, "v": 0.0004},
                    {"c": "chr10", "p": 100000, "v": 0.0009}
                  ],
                  "chromosomeField": "c",
                  "genomicFields": ["p"]
                },
                "mark": "rule",
                "x": {"field": "p", "type": "genomic"},
                "strokeWidth": {"value": 2},
                "color": {"value": "blue"}
              }
            ],
            "width": 500,
            "height": 200
          }
        ]
      },


    //example Ideograms
    example3: {
        "static": true,
        "layout": "linear",
        "centerRadius": 0.2,
        "arrangement": "parallel",
        "views": [
          {
            "xDomain": {"chromosome": "chr1"},
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 1000,
                "height": 30
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/cytogenetic_band.csv",
                  "type": "csv",
                  "chromosomeField": "Chr.",
                  "genomicFields": [
                    "ISCN_start",
                    "ISCN_stop",
                    "Basepair_start",
                    "Basepair_stop"
                  ]
                },
                "tracks": [
                  {
                    "mark": "text",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "text": {"field": "Band", "type": "nominal"},
                    "color": {"value": "black"},
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ]
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "color": {
                      "field": "Density",
                      "type": "nominal",
                      "domain": ["", "25", "50", "75", "100"],
                      "range": ["white", "#D9D9D9", "#979797", "#636363", "black"]
                    }
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                    ],
                    "color": {"value": "#A0A0F2"}
                  },
                  {
                    "mark": "triangleRight",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                    ],
                    "color": {"value": "#B40101"}
                  },
                  {
                    "mark": "triangleLeft",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                    ],
                    "color": {"value": "#B40101"}
                  }
                ],
                "x": {"field": "Basepair_start", "type": "genomic"},
                "xe": {"field": "Basepair_stop", "type": "genomic"},
                "stroke": {"value": "gray"},
                "strokeWidth": {"value": 0.5},
                "width": 1000,
                "height": 20
              }
            ]
          },
          {
            "xDomain": {"chromosome": "chr2"},
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 970,
                "height": 30
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/cytogenetic_band.csv",
                  "type": "csv",
                  "chromosomeField": "Chr.",
                  "genomicFields": [
                    "ISCN_start",
                    "ISCN_stop",
                    "Basepair_start",
                    "Basepair_stop"
                  ]
                },
                "tracks": [
                  {
                    "mark": "text",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "text": {"field": "Band", "type": "nominal"},
                    "color": {"value": "black"},
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ]
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "color": {
                      "field": "Density",
                      "type": "nominal",
                      "domain": ["", "25", "50", "75", "100"],
                      "range": ["white", "#D9D9D9", "#979797", "#636363", "black"]
                    }
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                    ],
                    "color": {"value": "#A0A0F2"}
                  },
                  {
                    "mark": "triangleRight",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                    ],
                    "color": {"value": "#B40101"}
                  },
                  {
                    "mark": "triangleLeft",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                    ],
                    "color": {"value": "#B40101"}
                  }
                ],
                "x": {"field": "Basepair_start", "type": "genomic"},
                "xe": {"field": "Basepair_stop", "type": "genomic"},
                "stroke": {"value": "gray"},
                "strokeWidth": {"value": 0.5},
                "width": 970,
                "height": 20
              }
            ]
          },
          {
            "xDomain": {"chromosome": "chr3"},
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 800,
                "height": 30
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/cytogenetic_band.csv",
                  "type": "csv",
                  "chromosomeField": "Chr.",
                  "genomicFields": [
                    "ISCN_start",
                    "ISCN_stop",
                    "Basepair_start",
                    "Basepair_stop"
                  ]
                },
                "tracks": [
                  {
                    "mark": "text",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "text": {"field": "Band", "type": "nominal"},
                    "color": {"value": "black"},
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ]
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "color": {
                      "field": "Density",
                      "type": "nominal",
                      "domain": ["", "25", "50", "75", "100"],
                      "range": ["white", "#D9D9D9", "#979797", "#636363", "black"]
                    }
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                    ],
                    "color": {"value": "#A0A0F2"}
                  },
                  {
                    "mark": "triangleRight",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                    ],
                    "color": {"value": "#B40101"}
                  },
                  {
                    "mark": "triangleLeft",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                    ],
                    "color": {"value": "#B40101"}
                  }
                ],
                "x": {"field": "Basepair_start", "type": "genomic"},
                "xe": {"field": "Basepair_stop", "type": "genomic"},
                "stroke": {"value": "gray"},
                "strokeWidth": {"value": 0.5},
                "width": 800,
                "height": 20
              }
            ]
          },
          {
            "xDomain": {"chromosome": "chr4"},
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 770,
                "height": 30
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/cytogenetic_band.csv",
                  "type": "csv",
                  "chromosomeField": "Chr.",
                  "genomicFields": [
                    "ISCN_start",
                    "ISCN_stop",
                    "Basepair_start",
                    "Basepair_stop"
                  ]
                },
                "tracks": [
                  {
                    "mark": "text",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "text": {"field": "Band", "type": "nominal"},
                    "color": {"value": "black"},
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ]
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "color": {
                      "field": "Density",
                      "type": "nominal",
                      "domain": ["", "25", "50", "75", "100"],
                      "range": ["white", "#D9D9D9", "#979797", "#636363", "black"]
                    }
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                    ],
                    "color": {"value": "#A0A0F2"}
                  },
                  {
                    "mark": "triangleRight",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                    ],
                    "color": {"value": "#B40101"}
                  },
                  {
                    "mark": "triangleLeft",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                    ],
                    "color": {"value": "#B40101"}
                  }
                ],
                "x": {"field": "Basepair_start", "type": "genomic"},
                "xe": {"field": "Basepair_stop", "type": "genomic"},
                "stroke": {"value": "gray"},
                "strokeWidth": {"value": 0.5},
                "width": 770,
                "height": 20
              }
            ]
          },
          {
            "xDomain": {"chromosome": "chr5"},
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "mark": "area",
                "x": {"field": "position", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 740,
                "height": 30
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/cytogenetic_band.csv",
                  "type": "csv",
                  "chromosomeField": "Chr.",
                  "genomicFields": [
                    "ISCN_start",
                    "ISCN_stop",
                    "Basepair_start",
                    "Basepair_stop"
                  ]
                },
                "tracks": [
                  {
                    "mark": "text",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "text": {"field": "Band", "type": "nominal"},
                    "color": {"value": "black"},
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ]
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen-1", "acen-2"],
                        "not": true
                      }
                    ],
                    "color": {
                      "field": "Density",
                      "type": "nominal",
                      "domain": ["", "25", "50", "75", "100"],
                      "range": ["white", "#D9D9D9", "#979797", "#636363", "black"]
                    }
                  },
                  {
                    "mark": "rect",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                    ],
                    "color": {"value": "#A0A0F2"}
                  },
                  {
                    "mark": "triangleRight",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                    ],
                    "color": {"value": "#B40101"}
                  },
                  {
                    "mark": "triangleLeft",
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                    ],
                    "color": {"value": "#B40101"}
                  }
                ],
                "x": {"field": "Basepair_start", "type": "genomic"},
                "xe": {"field": "Basepair_stop", "type": "genomic"},
                "stroke": {"value": "gray"},
                "strokeWidth": {"value": 0.5},
                "width": 740,
                "height": 20
              }
            ]
          }
        ]
      },


    //example Mark displacement
    example4: {
        "title": "Mark Displacement",
        "subtitle": "Reposition marks to address visual overlaps using displacement options",
        "spacing": 1,
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "chr17", "interval": [43080000, 43120000]},
        "views": [
          {
            "alignment": "overlay",
            "xDomain": {"chromosome": "chr3", "interval": [142500000, 143000000]},
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=transcript-hg38-beddb",
              "type": "beddb",
              "genomicFields": [
                {"index": 1, "name": "start"},
                {"index": 2, "name": "end"}
              ],
              "valueFields": [
                {"index": 0, "name": "chr", "type": "nominal"},
                {"index": 5, "name": "strand", "type": "nominal"},
                {"index": 3, "name": "name", "type": "nominal"},
                {"index": 9, "name": "exon_start", "type": "nominal"},
                {"index": 10, "name": "exon_end", "type": "nominal"}
              ]
            },
            "dataTransform": [
              {"type": "filter", "field": "type", "oneOf": ["gene"]},
              {
                "type": "displace",
                "method": "pile",
                "boundingBox": {"startField": "start", "endField": "end"},
                "newField": "row",
                "maxRows": 15
              }
            ],
            "title": "hg38 | Transcript (Max. 15 Rows)",
            "tracks": [
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["+"]}
                ],
                "mark": "triangleRight",
                "x": {"field": "end", "type": "genomic", "axis": "top"},
                "size": {"value": 15}
              },
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {"type": "filter", "field": "type", "oneOf": ["gene"]}
                ],
                "mark": "text",
                "text": {"field": "name", "type": "nominal"},
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "style": {"dy": -10}
              },
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["-"]}
                ],
                "mark": "triangleLeft",
                "x": {"field": "start", "type": "genomic"},
                "size": {"value": 15},
                "style": {"align": "right"}
              },
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {
                    "type": "exonSplit",
                    "separator": ",",
                    "flag": {"field": "type", "value": "exon"},
                    "fields": [
                      {
                        "field": "exon_start",
                        "type": "genomic",
                        "newField": "start",
                        "chrField": "chr"
                      },
                      {
                        "field": "exon_end",
                        "type": "genomic",
                        "newField": "end",
                        "chrField": "chr"
                      }
                    ]
                  },
                  {"type": "filter", "field": "type", "oneOf": ["exon"]}
                ],
                "mark": "rect",
                "size": {"value": 10},
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"}
              },
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["+"]}
                ],
                "mark": "rule",
                "x": {"field": "start", "type": "genomic"},
                "strokeWidth": {"value": 3},
                "xe": {"field": "end", "type": "genomic"},
                "style": {"linePattern": {"type": "triangleRight", "size": 5}}
              },
              {
                "dataTransform": [
                  {
                    "type": "displace",
                    "method": "pile",
                    "boundingBox": {"startField": "start", "endField": "end"},
                    "newField": "row",
                    "maxRows": 15
                  },
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["-"]}
                ],
                "mark": "rule",
                "x": {"field": "start", "type": "genomic"},
                "strokeWidth": {"value": 3},
                "xe": {"field": "end", "type": "genomic"},
                "style": {"linePattern": {"type": "triangleRight", "size": 5}}
              }
            ],
            "row": {"field": "row", "type": "nominal"},
            "color": {
              "field": "strand",
              "type": "nominal",
              "domain": ["+", "-"],
              "range": ["#0072B2", "#D45E00"]
            },
            "visibility": [
              {
                "operation": "less-than",
                "measure": "width",
                "threshold": "|xe-x|",
                "transitionPadding": 10,
                "target": "mark"
              }
            ],
            "opacity": {"value": 0.8},
            "style": {"outline": "black"},
            "width": 700,
            "height": 500
          },
          {
            "xDomain": {"chromosome": "chr2", "interval": [126800000, 127700000]},
            "tracks": [
              {
                "alignment": "overlay",
                "title": "Likely Benign",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=clinvar-beddb",
                  "type": "beddb",
                  "genomicFields": [
                    {"index": 1, "name": "start"},
                    {"index": 2, "name": "end"}
                  ],
                  "valueFields": [
                    {"index": 7, "name": "significance", "type": "nominal"},
                    {"type": "nominal", "index": 3, "name": "3"},
                    {"type": "nominal", "index": 4, "name": "4"}
                  ]
                },
                "dataTransform": [
                  {
                    "type": "filter",
                    "field": "significance",
                    "oneOf": ["Likely_benign"]
                  },
                  {
                    "type": "displace",
                    "boundingBox": {
                      "startField": "start",
                      "endField": "end",
                      "padding": 5
                    },
                    "method": "spread",
                    "newField": "a"
                  }
                ],
                "tracks": [
                  {
                    "mark": "point",
                    "size": {"value": 4},
                    "color": {"value": "#029F73"},
                    "stroke": {"value": "black"},
                    "strokeWidth": {"value": 1}
                  },
                  {
                    "mark": "text",
                    "color": {
                      "field": "3",
                      "type": "nominal",
                      "domain": ["A", "T", "G", "C"],
                      "legend": true
                    },
                    "text": {"field": "3", "type": "nominal"},
                    "y": {"value": 48}
                  },
                  {
                    "mark": "text",
                    "color": {
                      "field": "4",
                      "type": "nominal",
                      "domain": ["A", "T", "G", "C"]
                    },
                    "text": {"field": "4", "type": "nominal"},
                    "y": {"value": 18}
                  },
                  {
                    "mark": "text",
                    "color": {"value": "gray"},
                    "text": {"value": "↓"},
                    "y": {"value": 33}
                  }
                ],
                "x": {"field": "aStart", "type": "genomic"},
                "xe": {"field": "aEnd", "type": "genomic"},
                "y": {"value": 5},
                "opacity": {"value": 0.8},
                "style": {"inlineLegend": true},
                "width": 700,
                "height": 60
              },
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=clinvar-beddb",
                  "type": "beddb",
                  "genomicFields": [
                    {"index": 1, "name": "start"},
                    {"index": 2, "name": "end"}
                  ],
                  "valueFields": [
                    {"index": 7, "name": "significance", "type": "nominal"}
                  ]
                },
                "dataTransform": [
                  {
                    "type": "filter",
                    "field": "significance",
                    "oneOf": ["Likely_benign"]
                  },
                  {
                    "type": "displace",
                    "boundingBox": {
                      "startField": "start",
                      "endField": "end",
                      "padding": 5
                    },
                    "method": "spread",
                    "newField": "a"
                  }
                ],
                "mark": "betweenLink",
                "xe": {"field": "start", "type": "genomic"},
                "x": {"field": "aStart", "type": "genomic"},
                "color": {"value": "#029F73"},
                "stroke": {"value": "lightgrey"},
                "strokeWidth": {"value": 0.5},
                "opacity": {"value": 0.8},
                "width": 700,
                "height": 60
              },
              {
                "alignment": "overlay",
                "tracks": [
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=clinvar-beddb",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 7, "name": "significance", "type": "nominal"}
                      ]
                    },
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "significance",
                        "oneOf": ["Likely_benign"]
                      }
                    ],
                    "mark": "rect",
                    "color": {"value": "lightgray"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 0.5},
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "opacity": {"value": 0.8}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["+"]}
                    ],
                    "mark": "triangleRight",
                    "x": {"field": "end", "type": "genomic", "axis": "none"},
                    "size": {"value": 15}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]}
                    ],
                    "mark": "text",
                    "text": {"field": "name", "type": "nominal"},
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "style": {"dy": -15}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["-"]}
                    ],
                    "mark": "triangleLeft",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 15},
                    "style": {"align": "right"}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["exon"]}
                    ],
                    "mark": "rect",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 15},
                    "xe": {"field": "end", "type": "genomic"}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["+"]}
                    ],
                    "mark": "rule",
                    "x": {"field": "start", "type": "genomic"},
                    "strokeWidth": {"value": 3},
                    "xe": {"field": "end", "type": "genomic"},
                    "style": {"linePattern": {"type": "triangleRight", "size": 5}}
                  },
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                      "type": "beddb",
                      "genomicFields": [
                        {"index": 1, "name": "start"},
                        {"index": 2, "name": "end"}
                      ],
                      "valueFields": [
                        {"index": 5, "name": "strand", "type": "nominal"},
                        {"index": 3, "name": "name", "type": "nominal"}
                      ],
                      "exonIntervalFields": [
                        {"index": 12, "name": "start"},
                        {"index": 13, "name": "end"}
                      ]
                    },
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"],
                      "range": ["#7585FF", "#FF8A85"]
                    },
                    "visibility": [
                      {
                        "operation": "less-than",
                        "measure": "width",
                        "threshold": "|xe-x|",
                        "transitionPadding": 10,
                        "target": "mark"
                      }
                    ],
                    "opacity": {"value": 0.8},
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["-"]}
                    ],
                    "mark": "rule",
                    "x": {"field": "start", "type": "genomic"},
                    "strokeWidth": {"value": 3},
                    "xe": {"field": "end", "type": "genomic"},
                    "style": {"linePattern": {"type": "triangleLeft", "size": 5}}
                  }
                ],
                "width": 700,
                "height": 100
              }
            ]
          },
          {
            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=clinvar-beddb",
                  "type": "beddb",
                  "genomicFields": [
                    {"index": 1, "name": "start"},
                    {"index": 2, "name": "end"}
                  ],
                  "valueFields": [
                    {"index": 7, "name": "significance", "type": "nominal"}
                  ]
                },
                "displacement": {"type": "pile", "padding": 3.5},
                "mark": "point",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "size": {"value": 3},
                "color": {
                  "field": "significance",
                  "type": "nominal",
                  "domain": [
                    "Pathogenic",
                    "Pathogenic/Likely_pathogenic",
                    "Likely_pathogenic",
                    "Uncertain_significance",
                    "Likely_benign",
                    "Benign/Likely_benign",
                    "Benign"
                  ],
                  "range": [
                    "#CB3B8C",
                    "#CB71A3",
                    "#CB96B3",
                    "gray",
                    "#029F73",
                    "#5A9F8C",
                    "#5A9F8C"
                  ],
                  "legend": true
                },
                "width": 700,
                "height": 260
              }
            ]
          }
        ],
        "style": {"outlineWidth": 0}
      },
    

    //example Circos plot
    example5: {
        "title": "Circos",
        "description": "http://circos.ca/intro/genomic_data/",
        "layout": "circular",
        "static": true,
        "spacing": 1,
        "centerRadius": 0.3,
        "alignment": "stack",
        "tracks": [
          {
            "data": {
              "type": "vector",
              "url": "https://resgen.io/api/v1/tileset_info/?d=VLFaiSVjTjW6mkbjRjWREA",
              "column": "position",
              "value": "peak"
            },
            "mark": "bar",
            "x": {"field": "position", "type": "genomic", "axis": "top"},
            "y": {"field": "peak", "type": "quantitative", "axis": "right"},
            "color": {"value": "#EEEDA1"},
            "width": 700,
            "height": 60
          },
          {
            "data": {
              "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
              "type": "csv",
              "chromosomeField": "Chromosome",
              "genomicFields": ["chromStart", "chromEnd"]
            },
            "mark": "rect",
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": [
                "gneg",
                "gpos25",
                "gpos50",
                "gpos75",
                "gpos100",
                "gvar",
                "acen"
              ],
              "range": [
                "white",
                "#D9D9D9",
                "#979797",
                "#636363",
                "black",
                "#F0F0F0",
                "#8D8D8D"
              ]
            },
            "x": {"field": "chromStart", "type": "genomic"},
            "xe": {"field": "chromEnd", "type": "genomic"},
            "stroke": {"value": "lightgray"},
            "strokeWidth": {"value": 0.5},
            "width": 700,
            "height": 30
          },
          {
            "alignment": "overlay",
            "data": {
              "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
              "type": "csv",
              "headerNames": ["id", "chr", "p1", "p2"],
              "chromosomePrefix": "hs",
              "chromosomeField": "chr",
              "genomicFields": ["p1", "p2"],
              "separator": " ",
              "longToWideId": "id"
            },
            "opacity": {"value": 0.4},
            "tracks": [
              {
                "dataTransform": [
                  {"type": "filter", "field": "chr", "oneOf": ["hs1"], "not": true}
                ],
                "mark": "withinLink",
                "x": {"field": "p1", "type": "genomic"},
                "xe": {"field": "p1_2", "type": "genomic"},
                "x1": {"field": "p2", "type": "genomic"},
                "x1e": {"field": "p2_2", "type": "genomic"},
                "stroke": {"value": "lightgray"},
                "strokeWidth": {"value": 1}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "chr", "oneOf": ["hs1"]}
                ],
                "mark": "withinLink",
                "x": {"field": "p1", "type": "genomic"},
                "xe": {"field": "p1_2", "type": "genomic"},
                "x1": {"field": "p2", "type": "genomic"},
                "x1e": {"field": "p2_2", "type": "genomic"},
                "stroke": {
                  "field": "chr_2",
                  "type": "nominal",
                  "range": [
                    "#E79F00",
                    "#029F73",
                    "#0072B2",
                    "#CB7AA7",
                    "#D45E00",
                    "#57B4E9",
                    "#EFE441"
                  ]
                },
                "strokeWidth": {"value": 1.5}
              }
            ],
            "width": 700,
            "height": 300
          }
        ]
      }

      
  }
  
  
  
  