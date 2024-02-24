from docx2pdf import convert
import os

# Get the current directory
current_directory = os.getcwd()

# Provide the path to the directory containing your .docx files
docx_directory = current_directory  # Set the current directory as the path

# Convert all .docx files in the directory to PDF
convert(docx_directory)
