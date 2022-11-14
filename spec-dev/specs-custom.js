module.exports = {

    example0:
    {
        "title": "Title of gosling desc",
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
                "mark": "bar",
                "x": { "field": "position", "type": "genomic", "axis": "top" },
                "y": { "field": "peak", "type": "quantitative" },
                "row": { "field": "sample", "type": "nominal" },
                "color": { "field": "sample", "type": "nominal", "legend": true }
            },
            {
              "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
              },
              "mark": "bar",
              "x": { "field": "position", "type": "genomic", "axis": "top" },
              "y": { "field": "peak", "type": "quantitative" },
              "row": { "field": "sample", "type": "nominal" },
              "color": { "field": "sample", "type": "nominal", "legend": true }
          }
        ]
      },
    
    example1: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "arrangement": "vertical",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "1", "interval": [1, 3000500]},
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
                  "domain": {"chromosome": "1", "interval": [103900000, 104100000]}
                },
                "xe": {"field": "e1", "type": "genomic"},
                "x1": {
                  "field": "s2",
                  "type": "genomic",
                  "domain": {"chromosome": "1"}
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
    
    
      example2: {
        "title": "Visual Encoding in Circular Layouts",
        "subtitle": "Gosling provides diverse visual encoding methods in circular layouts",
        "layout": "circular",
        "arrangement": "vertical",
        "centerRadius": 0.5,
        "static": true,
        "xDomain": {"chromosome": "1", "interval": [1, 3000500]},
        "views": [
          {
            //"arrangement": "horizontal",
            "views": [
              {
                "spacing": 2,
                "tracks": [
                  {
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
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
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
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
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
                "spacing": 2,
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
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
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
                "width": 350,
                "height": 130
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "spacing": 2,
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
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
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
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
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
                "spacing": 2,
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
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "stroke": {"value": "white"},
                    "strokeWidth": {"value": 0.5},
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
                "tracks": [
                  {
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
                        "chromosome": "1",
                        "interval": [103900000, 104100000]
                      }
                    },
                    "xe": {"field": "e1", "type": "genomic"},
                    "x1": {
                      "field": "s2",
                      "type": "genomic",
                      "domain": {"chromosome": "1"}
                    },
                    "x1e": {"field": "e2", "type": "genomic"},
                    "color": {"field": "s1", "type": "nominal"},
                    "stroke": {"value": "black"},
                    "strokeWidth": {"value": 0.5},
                    "opacity": {"value": 0.4},
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
    
    
      example3: {
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
                    {"c": "chr2", "p": 100000, "v": 0.002},
                    {"c": "chr5", "p": 100000, "v": 0.004},
                    {"c": "chr10", "p": 100000, "v": 0.009}
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
    
  
  
      example4: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "arrangement": "vertical",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "1", "interval": [1, 3000500]},
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
              }
            ]
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
                  "domain": {"chromosome": "1", "interval": [103900000, 104100000]}
                },
                "xe": {"field": "e1", "type": "genomic"},
                "x1": {
                  "field": "s2",
                  "type": "genomic",
                  "domain": {"chromosome": "1"}
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
  
      example5: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "arrangement": "vertical",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "1", "interval": [1, 3000500]},
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
              }
            ]
          }
        ]        
      },
  
      example6: {
        "title": "Visual Encoding in Circular Layouts",
        "subtitle": "Gosling provides diverse visual encoding methods in circular layouts",
        "layout": "circular",
        "arrangement": "vertical",
        "centerRadius": 0.5,
        "static": true,
        "xDomain": {"chromosome": "1", "interval": [1, 3000500]},
        "views": [
          {
            "arrangement": "horizontal",
            "assembly" : "hg19",
            "layout" : "stack",
            "views": [
              {
                "spacing": 2,
                "tracks": [
                  {
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
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
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
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
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
                "spacing": 2,
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
                    "mark": "bar",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
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
                "spacing": 2,
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
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
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
                    "mark": "point",
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative", "grid": true},
                    "size": {"field": "peak", "type": "quantitative"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "opacity": {"value": 0.5},
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
                "spacing": 2,
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
                    "x": {"field": "position", "type": "genomic", "axis": "top"},
                    "y": {"field": "peak", "type": "quantitative"},
                    "row": {"field": "sample", "type": "nominal"},
                    "color": {"field": "sample", "type": "nominal", "legend": true},
                    "stroke": {"value": "white"},
                    "strokeWidth": {"value": 0.5},
                    "width": 350,
                    "height": 130
                  }
                ]
              },
              {
                "spacing": 2,
                "layout" : "RANDOM",
                "tracks": [
                  {
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
                        "chromosome": "1",
                        "interval": [103900000, 104100000]
                      }
                    },
                    "xe": {"field": "e1", "type": "genomic"},
                    "x1": {
                      "field": "s2",
                      "type": "genomic",
                      "domain": {"chromosome": "1"}
                    },
                    "x1e": {"field": "e2", "type": "genomic"},
                    "color": {"field": "s1", "type": "nominal"},
                    "stroke": {"value": "black"},
                    "strokeWidth": {"value": 0.5},
                    "opacity": {"value": 0.4},
                    "width": 350,
                    "height": 130
                  }
                ]
              }
            ]
          },
          {
            "layout" : "RANDOM2",
            "tracks": [
              {
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

      example7: {
        "title": "Testing",
        "arrangement": "vertical",
        "views": [
          {
            //"arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
                "spacing": 2,
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              }
            ]
          },
          {
            "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
          }
        ]
      },

      example8: {
        "title": "Testing",
        "arrangement": "vertical",
        "views": [
         
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                      "binSize": 4
                    },
                    "mark": "point",
                    "x": {"field": "start", "type": "genomic", "axis": "top"},
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              // },
              // {
              //   "alignment": "overlay",
              //   "data": {
              //     "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              //     "type": "multivec",
              //     "row": "sample",
              //     "column": "position",
              //     "value": "peak",
              //     "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
              //   },
              //   "x": {"field": "position", "type": "genomic", "axis": "top"},
              //   "y": {"field": "peak", "type": "quantitative"},
              //   "row": {"field": "sample", "type": "nominal"},
              //   "color": {"field": "sample", "type": "nominal", "legend": true},
              //   "tracks": [
              //     {"mark": "line"},
              //     {
              //       "mark": "point",
              //       "size": {"field": "peak", "type": "quantitative", "range": [0, 2]}
              //     }
              //   ]
              }
            ]
          },

          {

            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                  "binSize": 4
                },
                "mark": "line",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "row": {"field": "sample", "type": "nominal", "legend": true}
              },
              {
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
                "row": {"field": "sample", "type": "nominal", "legend": true}
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
               "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              }
            ]
          },
          {
            "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
          }
        ]
      },

      example9: {
        "title": "Testing",
        "arrangement": "vertical",
        "views": [
         
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                      "type": "multivec",
                      "row": "sample",
                      "column": "position",
                      "value": "peak",
                      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                      "binSize": 4
                    },
                    "mark": "point",
                    "x": {"field": "start", "type": "genomic", "axis": "top"},
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
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
                ]
              }
            ]
          },

          {

            "tracks": [
              {
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                  "binSize": 4
                },
                "mark": "line",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "row": {"field": "sample", "type": "nominal", "legend": true}
              },
              {
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
                "row": {"field": "sample", "type": "nominal", "legend": true}
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
               "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
               "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              }
            ]
          },
          {
           
            "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              },
              {
                "arrangement" : "vertical",
                "views": [
                  
                  {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }]},

                  {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }
                ]
              }
                ]
              }, 
              {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }]}
            ]
          },
          {
                "tracks": [
                  {
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
                    "row": {"field": "sample", "type": "nominal", "legend": true}
                  }]}
        ]
      },

      exampleNotValid: {
        "title": "Testing",
        "arrangement": "vertical",
        "views": [
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "data": "1",
                    "mark": "point",
                  }
                ]
              }
            ]
          },
          {
            "tracks": [
              {
                "data": "2",
                "mark": "line",
              },
              {
                "data": "2",
                "mark": "rect",
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
               "tracks": [
                  {
                    "data": "1",
                    "mark": "rect",
                  }
                ]
              },
              {
               "tracks": [
                  {
                    "data": "1",
                    "mark": "rect",
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
                    "data": "1",
                    "mark": "rect",
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "data": "1",
                    "mark": "rect",
                  }
                ]
              }
            ]
          },
          {
           
            "tracks": [
              {
                "data": "1",
                "mark": "rect",
              }
            ]
          },
          {
            "arrangement": "horizontal",
            "views": [
              {
                "tracks": [
                  {
                    "data": "1",
                    "mark": "rect",
                  }
                ]
              },
              {
                "arrangement" : "vertical",
                "views": [
                  {
                    "tracks": [
                      {
                        "data": "1",
                        "mark": "rect",
                      }
                    ]
                  },
                  {
                    "tracks": [
                      {
                        "data": "1",
                        "mark": "rect",
                      }
                    ]
                  },
                ]
              }, 
              {
                "tracks": [
                  {
                    "data": "1",
                    "mark": "rect",
                  }
                ]
              }
            ]
          },
          {
            "tracks": [
              {
                "data": "1",
                "mark": "rect",
              }
            ]
          }
        ]
      },


      example10 : {
        "title": "Expression in samples in Chromosome 1",
        "layout": "circular",
        "arrangement": "horizontal",
        "centerRadius": 0.5,
        "static": true,
        "xDomain": {"chromosome": "chr1"},
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
          }
        ]
      },

      example11 : {
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
      },

      example12 : {
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
          }
        ]
      },


      example13: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "arrangement": "vertical",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
        "views": [
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
      }
  }
  
  
  
  