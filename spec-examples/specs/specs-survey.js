module.exports = {
  example_1_bar: {
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

  example_2_heatmap: {
    "title": "Heatmap",
    "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
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
        "color": {"field": "peak", "type": "quantitative", "legend": true}
      }
    ]
  },

  example_3_ideogram_simple: {
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

  example_4_text: {
    "title": "Basic Marks: Text",
    "subtitle": "Tutorial Examples",
    "tracks": [
      {
        "width": 800,
        "height": 180,
        "data": {
          "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
          "type": "multivec",
          "row": "base",
          "column": "position",
          "value": "count",
          "categories": ["A", "T", "G", "C"],
          "start": "start",
          "end": "end",
          "binSize": 16
        },
        "mark": "text",
        "y": {"field": "count", "type": "quantitative"},
        "style": {"textStrokeWidth": 0},
        "stretch": true,
        "x": {"field": "start", "type": "genomic", "axis": "top"},
        "xe": {"field": "end", "type": "genomic"},
        "color": {
          "field": "base",
          "type": "nominal",
          "domain": ["A", "T", "G", "C"]
        },
        "text": {"field": "base", "type": "nominal"}
      }
    ]
  },
  
  example_5_rule_mark: {
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

  example_6_circos: {
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

  example_7_vis_enc: {
    "title": "Visual Encoding",
    "subtitle": "Gosling provides diverse visual encoding methods",
    "layout": "linear",
    "arrangement": "vertical",
    "centerRadius": 0.8,
    "xDomain": {"chromosome": "chr1", "interval": [1, 3000500]},
    "views": [
      {
        "arrangement" : "horizontal",
        "views": [
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
          }
        ]
      },
      {
        "arrangement" : "horizontal",
        "views" : [
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
          }
        ]
      }
    ]
  },

  example_8_circ_enc: {
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

  example_9_withinlink: {
    "title": "Gremlin (O'Brien et al. 2010)",
    "style": {"linkStyle": "elliptical"},
    "views": [
      {
        "tracks": [
          {
            "title": "Region of Interest",
            "data": {
              "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
              "type": "csv",
              "headerNames": ["id", "chr", "p1", "p2"],
              "chromosomePrefix": "hs",
              "chromosomeField": "chr",
              "genomicFields": ["p1", "p2"],
              "separator": " ",
              "longToWideId": "id",
              "sampleLength": 1000
            },
            "mark": "withinLink",
            "x": {
              "field": "p1",
              "type": "genomic",
              "linkingId": "view2",
              "axis": "bottom",
              "domain": {
                "chromosome": "chr5",
                "interval": [68000000, 71000000]
              }
            },
            "xe": {"field": "p2", "type": "genomic"},
            "row": {
              "field": "chr_2",
              "type": "nominal",
              "domain": ["hs5", "hs4", "hs6", "empty"]
            },
            "color": {"value": "none"},
            "stroke": {
              "field": "chr_2",
              "type": "nominal",
              "domain": ["hs5", "hs4", "hs6"],
              "range": ["#62AAD7", "#D1A74F", "#6CB74C"]
            },
            "strokeWidth": {"value": 2},
            "opacity": {"value": 0.4},
            "style": {
              "outline": "lightgray",
              "outlineWidth": 3,
              "background": "#F8F8F8"
            },
            "width": 800,
            "height": 200
          }
        ]
      },
      {
        "tracks": [
          {
            "title": "Rearrangement View",
            "data": {
              "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
              "type": "csv",
              "headerNames": ["id", "chr", "p1", "p2"],
              "chromosomePrefix": "hs",
              "chromosomeField": "chr",
              "genomicFields": ["p1", "p2"],
              "separator": " ",
              "longToWideId": "id",
              "sampleLength": 1000
            },
            "dataTransform": [
              {"type": "filter", "field": "chr", "oneOf": ["hs5"]}
            ],
            "mark": "withinLink",
            "x": {
              "field": "p1",
              "type": "genomic",
              "axis": "bottom",
              "domain": {
                "chromosome": "chr5",
                "interval": [69276000, 69282000]
              }
            },
            "xe": {"field": "p2", "type": "genomic"},
            "color": {"value": "none"},
            "stroke": {"value": "#62AAD7"},
            "strokeWidth": {"value": 6},
            "opacity": {"value": 0.4},
            "style": {"outline": "lightgray", "outlineWidth": 3},
            "width": 600,
            "height": 200
          }
        ]
      }
    ]
  },

  example_10_brushing: {
    "title": "Visual Linking",
    "subtitle": "Change the position and range of brushes to update the detail view on the bottom",
    "arrangement": "vertical",
    "centerRadius": 0.4,
    "views": [
      {
        "spacing": 40,
        "arrangement": "horizontal",
        "views": [
          {
            "spacing": 5,
            "static": true,
            "layout": "circular",
            "xDomain": {"chromosome": "chr1"},
            "alignment": "overlay",
            "tracks": [
              {"mark": "bar"},
              {"mark": "brush", "x": {"linkingId": "detail"}}
            ],
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
            },
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"field": "peak", "type": "quantitative"},
            "row": {"field": "sample", "type": "nominal"},
            "color": {"field": "sample", "type": "nominal"},
            "width": 250,
            "height": 130
          },
          {
            "layout": "linear",
            "xDomain": {"chromosome": "chr1"},
            "alignment": "overlay",
            "tracks": [
              {"mark": "bar"},
              {"mark": "brush", "x": {"linkingId": "detail"}}
            ],
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
            },
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"field": "peak", "type": "quantitative"},
            "row": {"field": "sample", "type": "nominal"},
            "color": {"field": "sample", "type": "nominal"},
            "width": 400,
            "height": 200
          }
        ]
      },
      {
        "layout": "linear",
        "xDomain": {"chromosome": "chr1", "interval": [160000000, 200000000]},
        "linkingId": "detail",
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
            "color": {"field": "sample", "type": "nominal"},
            "width": 690,
            "height": 200
          }
        ]
      }
    ]
  },

  example_11_matrix: {
    "title": "Matrix Visualization",
    "subtitle": "Comparison of Micro-C and Hi-C for HFFc6 Cells",
    "arrangement": "horizontal",
    "xDomain": {"chromosome": "chr7", "interval": [77700000, 81000000]},
    "spacing": 1,
    "linkingId": "-",
    "views": [
      {
        "orientation": "vertical",
        "yOffset": 75,
        "views": [
          {
            "tracks": [
              {
                "data": {
                  "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_H3K4me3.bigWig",
                  "type": "bigwig",
                  "column": "position",
                  "value": "peak",
                  "binSize": 8
                },
                "title": "HFFc6_H3K4me3",
                "mark": "bar",
                "x": {"field": "start", "type": "genomic", "axis": "top"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative", "axis": "none"},
                "color": {"value": "darkgreen"},
                "height": 600,
                "width": 40
              },
              {
                "data": {
                  "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_Atacseq.mRp.clN.bigWig",
                  "type": "bigwig",
                  "column": "position",
                  "value": "peak",
                  "binSize": 8
                },
                "title": "HFFc6_ATAC",
                "mark": "bar",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative", "axis": "none"},
                "color": {"value": "#E79F00"},
                "height": 600,
                "width": 40
              },
              {
                "alignment": "overlay",
                "tracks": [
                  {
                    "data": {
                      "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFC6_CTCF.mRp.clN.bigWig",
                      "type": "bigwig",
                      "column": "position",
                      "value": "peak",
                      "binSize": 8
                    },
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "peak",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {"value": "#0072B2"}
                  },
                  {
                    "style": {"backgroundOpacity": 0},
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
                      ]
                    },
                    "dataTransform": [
                      {"type": "filter", "field": "strand", "oneOf": ["+"]}
                    ],
                    "mark": "triangleRight",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 13},
                    "stroke": {"value": "white"},
                    "strokeWidth": {"value": 1},
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {"value": "#CB7AA7"}
                  },
                  {
                    "style": {"backgroundOpacity": 0},
                    "title": "HFFC6_CTCF",
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
                      ]
                    },
                    "dataTransform": [
                      {"type": "filter", "field": "strand", "oneOf": ["-"]}
                    ],
                    "mark": "triangleLeft",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 13},
                    "stroke": {"value": "white"},
                    "strokeWidth": {"value": 1},
                    "row": {
                      "field": "strand",
                      "type": "nominal",
                      "domain": ["+", "-"]
                    },
                    "color": {"value": "#029F73"}
                  }
                ],
                "height": 600,
                "width": 40
              }
            ]
          }
        ]
      },
      {
        "spacing": 30,
        "views": [
          {
            "spacing": 0,
            "arrangement": "vertical",
            "views": [
              {
                "tracks": [
                  {
                    "data": {
                      "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_H3K4me3.bigWig",
                      "type": "bigwig",
                      "column": "position",
                      "value": "peak",
                      "binSize": 8
                    },
                    "title": "HFFc6_H3K4me3",
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic", "axis": "top"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "peak",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {"value": "darkgreen"},
                    "width": 570,
                    "height": 40
                  },
                  {
                    "data": {
                      "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_Atacseq.mRp.clN.bigWig",
                      "type": "bigwig",
                      "column": "position",
                      "value": "peak",
                      "binSize": 8
                    },
                    "title": "HFFc6_ATAC",
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "peak",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {"value": "#E79F00"},
                    "width": 600,
                    "height": 40
                  },
                  {
                    "alignment": "overlay",
                    "tracks": [
                      {
                        "data": {
                          "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFC6_CTCF.mRp.clN.bigWig",
                          "type": "bigwig",
                          "column": "position",
                          "value": "peak",
                          "binSize": 8
                        },
                        "mark": "bar",
                        "x": {"field": "start", "type": "genomic"},
                        "xe": {"field": "end", "type": "genomic"},
                        "y": {
                          "field": "peak",
                          "type": "quantitative",
                          "axis": "none"
                        },
                        "color": {"value": "#0072B2"}
                      },
                      {
                        "style": {"backgroundOpacity": 0},
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
                          ]
                        },
                        "dataTransform": [
                          {"type": "filter", "field": "strand", "oneOf": ["+"]}
                        ],
                        "mark": "triangleRight",
                        "x": {"field": "start", "type": "genomic"},
                        "size": {"value": 13},
                        "stroke": {"value": "white"},
                        "strokeWidth": {"value": 1},
                        "row": {
                          "field": "strand",
                          "type": "nominal",
                          "domain": ["+", "-"]
                        },
                        "color": {"value": "#CB7AA7"}
                      },
                      {
                        "style": {"backgroundOpacity": 0},
                        "title": "HFFC6_CTCF",
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
                          ]
                        },
                        "dataTransform": [
                          {"type": "filter", "field": "strand", "oneOf": ["-"]}
                        ],
                        "mark": "triangleLeft",
                        "x": {"field": "start", "type": "genomic"},
                        "stroke": {"value": "white"},
                        "strokeWidth": {"value": 1},
                        "size": {"value": 13},
                        "row": {
                          "field": "strand",
                          "type": "nominal",
                          "domain": ["+", "-"]
                        },
                        "color": {"value": "#029F73"}
                      }
                    ],
                    "width": 600,
                    "height": 40
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "title": "HFFc6_Micro-C",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=hffc6-microc-hg38",
                      "type": "matrix"
                    },
                    "mark": "bar",
                    "x": {"field": "xs", "type": "genomic", "axis": "none"},
                    "xe": {"field": "xe", "type": "genomic", "axis": "none"},
                    "y": {"field": "ys", "type": "genomic", "axis": "none"},
                    "ye": {"field": "ye", "type": "genomic", "axis": "none"},
                    "color": {
                      "field": "value",
                      "type": "quantitative",
                      "range": "warm"
                    },
                    "width": 600,
                    "height": 600
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "title": "Epilogos (hg38)",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=epilogos-hg38",
                      "type": "multivec",
                      "row": "category",
                      "column": "position",
                      "value": "value",
                      "categories": [
                        "Active TSS",
                        "Flanking Active TSS",
                        "Transcr at gene 5\\' and 3\\'",
                        "Strong transcription",
                        "Weak transcription",
                        "Genic enhancers",
                        "Enhancers",
                        "ZNF genes & repeats",
                        "Heterochromatin",
                        "Bivalent/Poised TSS",
                        "Flanking Bivalent TSS/Enh",
                        "Bivalent Enhancer",
                        "Repressed PolyComb",
                        "Weak Repressed PolyComb",
                        "Quiescent/Low"
                      ],
                      "binSize": 8
                    },
                    "dataTransform": [
                      {"type": "filter", "field": "value", "inRange": [0, 999999]}
                    ],
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic", "axis": "none"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "value",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {
                      "field": "category",
                      "type": "nominal",
                      "range": [
                        "#FF0000",
                        "#FF4500",
                        "#32CD32",
                        "#008000",
                        "#006400",
                        "#C2E105",
                        "#FFFF00",
                        "#66CDAA",
                        "#8A91D0",
                        "#CD5C5C",
                        "#E9967A",
                        "#BDB76B",
                        "#808080",
                        "#C0C0C0",
                        "gray"
                      ]
                    },
                    "width": 600,
                    "height": 40
                  }
                ]
              }
            ]
          },
          {
            "arrangement": "vertical",
            "spacing": 0,
            "views": [
              {
                "tracks": [
                  {
                    "data": {
                      "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_H3K4me3.bigWig",
                      "type": "bigwig",
                      "column": "position",
                      "value": "peak",
                      "binSize": 8
                    },
                    "title": "HFFc6_H3K4me3",
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic", "axis": "top"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "peak",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {"value": "darkgreen"},
                    "width": 600,
                    "height": 40
                  },
                  {
                    "data": {
                      "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFc6_Atacseq.mRp.clN.bigWig",
                      "type": "bigwig",
                      "column": "position",
                      "value": "peak",
                      "binSize": 8
                    },
                    "title": "HFFc6_ATAC",
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "peak",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {"value": "#E79F00"},
                    "width": 600,
                    "height": 40
                  },
                  {
                    "alignment": "overlay",
                    "tracks": [
                      {
                        "data": {
                          "url": "https://s3.amazonaws.com/gosling-lang.org/data/HFFC6_CTCF.mRp.clN.bigWig",
                          "type": "bigwig",
                          "column": "position",
                          "value": "peak",
                          "binSize": 8
                        },
                        "mark": "bar",
                        "x": {"field": "start", "type": "genomic"},
                        "xe": {"field": "end", "type": "genomic"},
                        "y": {
                          "field": "peak",
                          "type": "quantitative",
                          "axis": "none"
                        },
                        "color": {"value": "#0072B2"}
                      },
                      {
                        "style": {"backgroundOpacity": 0},
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
                          ]
                        },
                        "dataTransform": [
                          {"type": "filter", "field": "strand", "oneOf": ["+"]}
                        ],
                        "mark": "triangleRight",
                        "x": {"field": "start", "type": "genomic"},
                        "size": {"value": 13},
                        "stroke": {"value": "white"},
                        "strokeWidth": {"value": 1},
                        "row": {
                          "field": "strand",
                          "type": "nominal",
                          "domain": ["+", "-"]
                        },
                        "color": {"value": "#CB7AA7"}
                      },
                      {
                        "style": {"backgroundOpacity": 0},
                        "title": "HFFC6_CTCF",
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
                          ]
                        },
                        "dataTransform": [
                          {"type": "filter", "field": "strand", "oneOf": ["-"]}
                        ],
                        "mark": "triangleLeft",
                        "x": {"field": "start", "type": "genomic"},
                        "size": {"value": 13},
                        "stroke": {"value": "white"},
                        "strokeWidth": {"value": 1},
                        "row": {
                          "field": "strand",
                          "type": "nominal",
                          "domain": ["+", "-"]
                        },
                        "color": {"value": "#029F73"}
                      }
                    ],
                    "width": 600,
                    "height": 40
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "title": "HFFc6_Hi-C",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=hffc6-hic-hg38",
                      "type": "matrix"
                    },
                    "mark": "bar",
                    "x": {"field": "xs", "type": "genomic", "axis": "none"},
                    "xe": {"field": "xe", "type": "genomic", "axis": "none"},
                    "y": {"field": "ys", "type": "genomic", "axis": "none"},
                    "ye": {"field": "ye", "type": "genomic", "axis": "none"},
                    "color": {
                      "field": "value",
                      "type": "quantitative",
                      "range": "warm"
                    },
                    "width": 600,
                    "height": 600
                  }
                ]
              },
              {
                "tracks": [
                  {
                    "title": "Epilogos (hg38)",
                    "data": {
                      "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=epilogos-hg38",
                      "type": "multivec",
                      "row": "category",
                      "column": "position",
                      "value": "value",
                      "categories": [
                        "Active TSS",
                        "Flanking Active TSS",
                        "Transcr at gene 5\\' and 3\\'",
                        "Strong transcription",
                        "Weak transcription",
                        "Genic enhancers",
                        "Enhancers",
                        "ZNF genes & repeats",
                        "Heterochromatin",
                        "Bivalent/Poised TSS",
                        "Flanking Bivalent TSS/Enh",
                        "Bivalent Enhancer",
                        "Repressed PolyComb",
                        "Weak Repressed PolyComb",
                        "Quiescent/Low"
                      ],
                      "binSize": 8
                    },
                    "dataTransform": [
                      {"type": "filter", "field": "value", "inRange": [0, 999999]}
                    ],
                    "mark": "bar",
                    "x": {"field": "start", "type": "genomic", "axis": "none"},
                    "xe": {"field": "end", "type": "genomic"},
                    "y": {
                      "field": "value",
                      "type": "quantitative",
                      "axis": "none"
                    },
                    "color": {
                      "field": "category",
                      "type": "nominal",
                      "range": [
                        "#FF0000",
                        "#FF4500",
                        "#32CD32",
                        "#008000",
                        "#006400",
                        "#C2E105",
                        "#FFFF00",
                        "#66CDAA",
                        "#8A91D0",
                        "#CD5C5C",
                        "#E9967A",
                        "#BDB76B",
                        "#808080",
                        "#C0C0C0",
                        "gray"
                      ]
                    },
                    "width": 600,
                    "height": 40
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "style": {"outlineWidth": 0, "background": "#F6F6F6"}
  },

  example_12_ideogram_hard: {
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

  example_12_corces: {
    "title": "Single-cell Epigenomic Analysis",
    "subtitle": "Corces et al. 2020",
    "layout": "linear",
    "arrangement": "vertical",
    "views": [
      {
        "layout": "linear",
        "xDomain": {"chromosome": "chr3"},
        "centerRadius": 0.8,
        "tracks": [
          {
            "alignment": "overlay",
            "title": "chr3",
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
                },
                "size": {"value": 20}
              },
              {
                "mark": "rect",
                "dataTransform": [
                  {"type": "filter", "field": "Stain", "oneOf": ["gvar"]}
                ],
                "color": {"value": "#A0A0F2"},
                "size": {"value": 20}
              },
              {
                "mark": "triangleRight",
                "dataTransform": [
                  {"type": "filter", "field": "Stain", "oneOf": ["acen-1"]}
                ],
                "color": {"value": "#B40101"},
                "size": {"value": 20}
              },
              {
                "mark": "triangleLeft",
                "dataTransform": [
                  {"type": "filter", "field": "Stain", "oneOf": ["acen-2"]}
                ],
                "color": {"value": "#B40101"},
                "size": {"value": 20}
              },
              {
                "mark": "brush",
                "x": {"linkingId": "detail"},
                "color": {"value": "red"},
                "opacity": {"value": 0.3},
                "strokeWidth": {"value": 1},
                "stroke": {"value": "red"}
              }
            ],
            "x": {"field": "Basepair_start", "type": "genomic", "axis": "none"},
            "xe": {"field": "Basepair_stop", "type": "genomic"},
            "stroke": {"value": "black"},
            "strokeWidth": {"value": 1},
            "style": {"outlineWidth": 0},
            "width": 400,
            "height": 25
          }
        ]
      },
      {
        "xDomain": {"chromosome": "chr3", "interval": [52168000, 52890000]},
        "linkingId": "detail",
        "x": {"field": "position", "type": "genomic"},
        "y": {"field": "peak", "type": "quantitative", "axis": "right"},
        "style": {"outline": "#20102F"},
        "width": 400,
        "height": 40,
        "tracks": [
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/ExcitatoryNeurons-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Excitatory neurons",
            "mark": "bar",
            "color": {"value": "#F29B67"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/InhibitoryNeurons-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Inhibitory neurons",
            "mark": "bar",
            "color": {"value": "#3DC491"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/DopaNeurons_Cluster10_AllFrags_projSUNI2_insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Dopaminergic neurons",
            "mark": "bar",
            "color": {"value": "#565C8B"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/Microglia-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Microglia",
            "mark": "bar",
            "color": {"value": "#77C0FA"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/Oligodendrocytes-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Oligodendrocytes",
            "mark": "bar",
            "color": {"value": "#9B46E5"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/Astrocytes-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "Astrocytes",
            "mark": "bar",
            "color": {"value": "#D73636"}
          },
          {
            "data": {
              "url": "https://s3.amazonaws.com/gosling-lang.org/data/OPCs-insertions_bin100_RIPnorm.bw",
              "type": "bigwig",
              "column": "position",
              "value": "peak"
            },
            "title": "OPCs",
            "mark": "bar",
            "color": {"value": "#E38ADC"}
          },
          {
            "alignment": "overlay",
            "title": "Genes",
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
            "style": {"outline": "#20102F"},
            "tracks": [
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["+"]}
                ],
                "mark": "text",
                "text": {"field": "name", "type": "nominal"},
                "x": {"field": "start", "type": "genomic"},
                "size": {"value": 8},
                "xe": {"field": "end", "type": "genomic"},
                "style": {"textFontSize": 8, "dy": -12}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["-"]}
                ],
                "mark": "text",
                "text": {"field": "name", "type": "nominal"},
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "size": {"value": 8},
                "style": {"textFontSize": 8, "dy": 10}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["+"]}
                ],
                "mark": "rect",
                "x": {"field": "end", "type": "genomic"},
                "size": {"value": 7}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["gene"]},
                  {"type": "filter", "field": "strand", "oneOf": ["-"]}
                ],
                "mark": "rect",
                "x": {"field": "start", "type": "genomic"},
                "size": {"value": 7}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["exon"]}
                ],
                "mark": "rect",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "size": {"value": 14}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "type", "oneOf": ["gene"]}
                ],
                "mark": "rule",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "strokeWidth": {"value": 3}
              }
            ],
            "row": {"field": "strand", "type": "nominal", "domain": ["+", "-"]},
            "color": {
              "field": "strand",
              "type": "nominal",
              "domain": ["+", "-"],
              "range": ["#012DB8", "#BE1E2C"]
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
            "width": 400,
            "height": 80
          },
          {
            "title": "PLAC-seq (H3K4me3) Nott et al.",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=oligodendrocyte-plac-seq-bedpe",
              "type": "beddb",
              "genomicFields": [
                {"name": "start", "index": 1},
                {"name": "end", "index": 2}
              ]
            },
            "mark": "withinLink",
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"flip": true},
            "strokeWidth": {"value": 1},
            "color": {"value": "none"},
            "stroke": {"value": "#F97E2A"},
            "opacity": {"value": 0.1},
            "overlayOnPreviousTrack": false,
            "width": 400,
            "height": 60
          },
          {
            "title": "",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=microglia-plac-seq-bedpe",
              "type": "beddb",
              "genomicFields": [
                {"name": "start", "index": 1},
                {"name": "end", "index": 2}
              ]
            },
            "mark": "withinLink",
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"flip": true},
            "strokeWidth": {"value": 1},
            "color": {"value": "none"},
            "stroke": {"value": "#50ADF9"},
            "opacity": {"value": 0.1},
            "overlayOnPreviousTrack": true,
            "width": 400,
            "height": 60
          },
          {
            "title": "",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=neuron-plac-seq-bedpe",
              "type": "beddb",
              "genomicFields": [
                {"name": "start", "index": 1},
                {"name": "end", "index": 2}
              ]
            },
            "mark": "withinLink",
            "x": {"field": "start", "type": "genomic"},
            "xe": {"field": "end", "type": "genomic"},
            "y": {"flip": true},
            "strokeWidth": {"value": 1},
            "color": {"value": "none"},
            "stroke": {"value": "#7B0EDC"},
            "opacity": {"value": 0.1},
            "overlayOnPreviousTrack": true,
            "width": 400,
            "height": 60
          }
        ]
      }
    ]
  }
}