
module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    ckeditor: {
      enabled: true,
      config:{
        plugin:{
          // disable data-theme tag setting //
          // setAttribute:false,

          // disable strapi theme, will use default ckeditor theme //
          // strapiTheme:false,

          // styles applied to editor container (global scope) //
          styles:`
            .ck {
              --ck-color-base-border: #F5F5F5;
              --ck-color-base-background: #F5F5F5;
            }

            .ck.ck-editor__main .ck-focused{
              max-height: none;
            }
            .ck.ck-editor__main .ck-blurred {
               max-height: none;
            }
            .ck.ck-editor__main blockquote,
            .ck.ck-editor__main dl,
            .ck.ck-editor__main dd,
            .ck.ck-editor__main h1,
            .ck.ck-editor__main h2,
            .ck.ck-editor__main h3,
            .ck.ck-editor__main h4,
            .ck.ck-editor__main h5,
            .ck.ck-editor__main h6,
            .ck.ck-editor__main hr,
            .ck.ck-editor__main p,
            .ck.ck-editor__main pre {
              margin-bottom: 1rem;
            }

            .ck.ck-editor__main p,
            .ck.ck-editor__main ul,
            .ck.ck-editor__main ol {
              color: rgb(101 101 101);
            }

            .ck.ck-editor__main strong,
            .ck.ck-editor__main h1,
            .ck.ck-editor__main h2,
            .ck.ck-editor__main h3,
            .ck.ck-editor__main h4,
            .ck.ck-editor__main h5,
            .ck.ck-editor__main h6, {
              color: rgb(30 30 30);
            }

            .ck.ck-editor__main ul {
              margin: 1rem 0 1rem 2rem;
              list-style: disc;
            }

            .ck.ck-editor__main ol {
              margin: 1rem 0 1rem 2rem;
              list-style: decimal;
            }

            .ck.ck-editor__main figure {
              margin: 1rem auto;
            }

            .ck.ck-editor__main blockquote {
              padding: 30px;
              background: rgb(255 255 255);
              border-radius: 16px;
            }
            .ck.ck-editor__main blockquote p {
                margin-bottom: 0;
            }
          `
        },
        editor:{ // editor default config

          // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
          // if you need markdown support and output set: removePlugins: [''],
          // default is
          // removePlugins: ['Markdown'],

          // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
          toolbar: {
            items: [
              'paragraph',
              'heading1',
              'heading2',
              '|',
              'bold',
              'italic',
              'fontColor',
              'fontBackgroundColor',
              'underline',
              'fontSize',
              'removeFormat',
              '|',
              'StrapiMediaLib',
              'insertTable',
              'blockQuote',
              'mediaEmbed',
              'link',
              'highlight',
              '|',
              'bulletedList',
              'todoList',
              'numberedList',
              '|',
              'alignment',
              'outdent',
              'indent',
              '|',
              'horizontalLine',
              'htmlEmbed',
              'sourceEditing',
              'code',
              'codeBlock',
              '|',
              'subscript',
              'superscript',
              'strikethrough',
              'specialCharacters',
              '|',
              'heading',
              "fullScreen",
              'undo',
              'redo'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
          fontSize: {
            options: [
              9,
              11,
              13,
              'default',
              17,
              19,
              21,
              27,
              35,
            ],
            supportAllValues: false
          },
          fontFamily: {
            options: [
              'default',
              'Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif',
              'Courier New, Courier, monospace',
              'Georgia, serif',
              'Lucida Sans Unicode, Lucida Grande, sans-serif',
              'Tahoma, Geneva, sans-serif',
              'Times New Roman, Times, serif',
              'Trebuchet MS, Helvetica, sans-serif',
              'Verdana, Geneva, sans-serif',
              'Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif',
            ],
            supportAllValues: true
          },
          fontColor: {
            columns: 5,
            documentColors: 10,
          },
          fontBackgroundColor: {
            columns: 5,
            documentColors: 10,
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
          // default language: 'en',
          // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
          image: {
            resizeUnit: "%",
            resizeOptions: [ {
              name: 'resizeImage:original',
              value: null,
              icon: 'original'
            },
              {
                name: 'resizeImage:25',
                value: '25',
                icon: 'small'
              },
              {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
              },
              {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
              } ],
            toolbar: [
              'toggleImageCaption',
              'imageTextAlternative',
              'imageStyle:inline',
              'imageStyle:block',
              'imageStyle:side',
              'linkImage',
              'resizeImage:25', 'resizeImage:50', 'resizeImage:75', 'resizeImage:original'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
          table: {
            contentToolbar: [
              'tableColumn',
              'tableRow',
              'mergeTableCells',
              'tableCellProperties',
              'tableProperties',
              'toggleTableCaption'
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
          heading: {
            options: [
              { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
              { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
              { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            ]
          },
          // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
          // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
          htmlSupport: {
            allow: [
              {
                name: 'img',
                attributes: {
                  sizes:true,
                  loading:true,
                }
              },
              {
                name: 'a',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'p',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'th',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'h1',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'h2',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'h3',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'h4',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'span',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'div',
                attributes: {
                  id: true,
                }
              },
              {
                name: 'li',
                attributes: {
                  value: true,
                }
              },
              {
                name: 'video',
                attributes: true,
              },
              {
                name: 'iframe',
                attributes: true,
              }
            ]
          },
        }
      }
    }
  }
}
