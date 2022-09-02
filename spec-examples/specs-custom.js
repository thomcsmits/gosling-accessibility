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
      }
  
  }
  
  
  
  