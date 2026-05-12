document.addEventListener('DOMContentLoaded', () => {
	// Alur sederhana: kirim data lewat query string, lalu halaman tampil membacanya.
	const form = document.getElementById('WorkInfo');
	const result = document.getElementById('workResult');

	if (form) {
		// Jika di profil.html: cegah submit default lalu redirect sambil membawa data di URL.
		form.addEventListener('submit', (event) => {
			event.preventDefault();

			const params = new URLSearchParams({
				alamat: form.pesan.value.trim(),
			});

			window.location.href = `works-tampil.html?${params.toString()}`;
		});
	}

	if (result) {
		// Jika di profil-tampil.html: baca query string dan tampilkan nilai.
		const params = new URLSearchParams(window.location.search);

		if (!params.toString()) {
			return;
		}

		const sanitize = (text) => {
			// Hindari karakter yang bisa memecah HTML.
			return (text || '-')
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;');
		};

		result.innerHTML = `
			<ul>
				<li><strong>Alamat:</strong> ${sanitize(params.get('pesan'))}</li>
			</ul>
		`;
	}
});