module.exports = {
    
    // example visual encoding: 3 vertically stacked plots
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
            "tracks" : [
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
                "mark" : "line",
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
          }
        ]
      },

    // example visual encoding: 3 vertically stacked plots. Same output as example0, but different usage of views and tracks
    example1: {
        "title": "Visual Encoding",
        "subtitle": "Gosling provides diverse visual encoding methods",
        "layout": "linear",
        "centerRadius": 0.8,
        "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
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
            }, 
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
            },
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
            "mark" : "line",
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

    // example simple bar chart
    example2: {
        "title": "Basic Marks: bar",
        "subtitle": "Tutorial Examples",
        "tracks": [
          {
            "layout": "linear",
            "width": 800,
            "height": 180,
            "data": {
              "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1"],
              "binSize": 5
            },
            "mark": "bar",
            "x": {"field": "start", "type": "genomic", "axis": "bottom"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"field": "peak", "type": "quantitative", "axis": "right"},
            "size": {"value": 5}
          }
        ]
    },

    // example simple ideogram
    example3: {
        "title": "Basic Marks: Rect",
        "subtitle": "Tutorial Examples",
        "tracks": [
          {
            "width": 800,
            "height": 40,
            "data": {
              "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
              "type": "csv",
              "chromosomeField": "Chromosome",
              "genomicFields": ["chromStart", "chromEnd"]
            },
            "mark": "rect",
            "dataTransform": [
              {"type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true}
            ],
            "color": {
              "field": "Stain",
              "type": "nominal",
              "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
              "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
            },
            "x": {
              "field": "chromStart",
              "type": "genomic",
              "domain": {"chromosome": "chr1"},
              "axis": "top"
            },
            "xe": {"field": "chromEnd", "type": "genomic"},
            "size": {"value": 20},
            "stroke": {"value": "gray"},
            "strokeWidth": {"value": 0.5},
            "style": {"outline": "white"}
          }
        ]
    },

    // example rule mark
    example4: {
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
      }

}