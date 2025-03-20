import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from "../conf/conf.js"

function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className='w-full'>
      {label && (
        <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <h1>Editor</h1>
            <Editor
              apiKey={conf.tinymceApiKey}
              tinymceScriptSrc={`https://cdn.tiny.cloud/1/${conf.tinymceApiKey}/tinymce/6/tinymce.min.js`}
              initialValue={defaultValue}
              init={{
                // Force TinyMCE to load resources from the CDN:
                base_url: `https://cdn.tiny.cloud/1/${conf.tinymceApiKey}/tinymce/6`,
                suffix: '',
                height: 500,
                menubar: true,
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image',
                  'charmap', 'preview', 'anchor', 'searchreplace',
                  'visualblocks', 'fullscreen', 'insertdatetime',
                  'media', 'table', 'code', 'help', 'wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | image | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                relative_urls: false,
                remove_script_host: false,
                convert_urls: true,
                skin: 'oxide',
                skin_url: `https://cdn.tiny.cloud/1/${conf.tinymceApiKey}/tinymce/6/skins/ui/oxide`,
                icons: 'default'
              }}
              onEditorChange={onChange}
            />
          </>
        )}
      />
    </div>
  )
}

export default RTE
