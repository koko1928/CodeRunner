const monacoLangMap = {
    "c": "c",
    "cpp": "cpp",
    "objective-c": "objective-c",
    "java": "java",
    "kotlin": "kotlin",
    "scala": "scala",
    "swift": "swift",
    "csharp": "csharp",
    "go": "go",
    "haskell": "haskell",
    "erlang": "erlang",
    "perl": "perl",
    "python": "python",
    "python3": "python",
    "ruby": "ruby",
    "php": "php",
    "bash": "shell",
    "r": "r",
    "javascript": "javascript",
    "coffeescript": "coffeescript",
    "vb": "vb",
    "cobol": "cobol",
    "fsharp": "fsharp",
    "d": "d",
    "clojure": "clojure",
    "elixir": "elixir",
    "mysql": "sql",
    "rust": "rust",
    "scheme": "scheme",
    "commonlisp": "lisp",
    "nadesiko": "plaintext",
    "typescript": "typescript",
    "brainfuck": "plaintext",
    "plain": "plaintext"
};

let editor;

require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor/min/vs' }});
require(['vs/editor/editor.main'], function() {
    editor = monaco.editor.create(document.getElementById('editor'), {
        value: '',
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true,
        minimap: { enabled: false }
    });
});

function changeLanguage() {
    const language = document.getElementById('language').value;
    monaco.editor.setModelLanguage(editor.getModel(), monacoLangMap[language]);

    const uiLanguage = document.getElementById('language-select').value;
    fetch(`/locales/${uiLanguage}/translation.json`)
        .then(response => response.json())
        .then(translations => {
            document.getElementById('title').innerText = translations.title;
            document.getElementById('language-label').innerText = translations.languageLabel;
            document.getElementById('source-code-label').innerText = translations.sourceCodeLabel;
            document.getElementById('input-label').innerText = translations.inputLabel;
            document.getElementById('execute-button').innerText = translations.executeButton;
            document.getElementById('result-title').innerText = translations.resultTitle;
            document.getElementById('stdout-label').innerText = translations.stdoutLabel;
            document.getElementById('build-stderr-label').innerText = translations.buildStderrLabel;
            document.getElementById('stderr-label').innerText = translations.stderrLabel;
        });
}

function executeCode() {
    const language = document.getElementById('language').value;
    const sourceCode = editor.getValue();
    const inputData = document.getElementById('input_data').value;

    if (!language || !sourceCode) {
        alert('Please enter a language and code.');
        return;
    }

    document.getElementById('loader').style.display = 'inline-block';
    $('#stdout-output, #build_stderr-output, #stderr-output').hide();

    const url = 'https://nodejs-ufn8.onrender.com/runners/create';
    const params = { source_code: sourceCode, language: language, input: inputData };

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(params),
        success: function(response) {
            if (response.error) {
                alert('Error occurred: ' + response.error);
                document.getElementById('loader').style.display = 'none';
                return;
            }

            const id = response.id;
            setTimeout(() => pollResult(id), 2000);
        },
        error: function() {
            alert('Failed to execute code.');
            document.getElementById('loader').style.display = 'none';
        }
    });
}

function pollResult(id) {
    const url = 'https://nodejs-ufn8.onrender.com/runners/get_details';
    const params = { id: id };

    $.get(url, params, function(result) {
        if (result.error) {
            alert('Error occurred: ' + result.error);
            document.getElementById('loader').style.display = 'none';
            return;
        }

        $('#stdout-output pre').text(result.stdout || '');
        $('#build_stderr-output pre').text(result.build_stderr || '');
        $('#stderr-output pre').text(result.stderr || '');

        $('#stdout-output').toggle(!!result.stdout);
        $('#build_stderr-output').toggle(!!result.build_stderr);
        $('#stderr-output').toggle(!!result.stderr);

        document.getElementById('loader').style.display = 'none';
    }).fail(function() {
        alert('Failed to retrieve results.');
        document.getElementById('loader').style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', changeLanguage);
