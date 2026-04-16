<script>
  export let data; // Data from the server

  console.log('Data received:', data);

  let messages = [];
  let loadingButtonId = null;
  let dropdownOpen = false;

  // Toggle dropdown
  function toggleDropdown() {
    dropdownOpen = !dropdownOpen;
  }

  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (!event.target.closest('.dropdown-container')) {
      dropdownOpen = false;
    }
  }

  // Handle booking action
  async function handleBooking(inquiry_id) {
    loadingButtonId = inquiry_id;
    const formData = new FormData();
    formData.append("inquiry_id", inquiry_id);

    try {
      const response = await fetch("?/markBooked", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const newMessage = {
          text: `Inquiry ${inquiry_id} booked! Proceed to finalize booking.`,
          id: Date.now(),
        };
        messages = [...messages, newMessage];

        setTimeout(() => {
          messages = messages.filter((message) => message.id !== newMessage.id);
        }, 10000);

        const updatedInquiry = data.inquiries.find((i) => i.inquiry_id === inquiry_id);
        if (updatedInquiry) updatedInquiry.book_status = true;
      } else {
        console.error("Failed to book inquiry");
      }
    } catch (error) {
      console.error("Error booking inquiry:", error);
    } finally {
      loadingButtonId = null;
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

{#if data?.inquiries?.length > 0}
  <div class="page-container">
    <h1 class="page-title">{data.showHandled ? "Handled Inquiries" : "Unhandled Inquiries"}</h1>

    <!-- Success Messages -->
    {#if messages.length > 0}
      <div class="messages-container">
        {#each messages as message}
          <div class="success-message">{message.text}</div>
        {/each}
      </div>
    {/if}

    <!-- Table with integrated controls -->
    <div class="table-wrapper">
      <table class="inquiries-table">
        <!-- Table Header with Controls -->
        <thead>
          <tr class="controls-row">
            <th colspan="9">
              <div class="table-controls">
                <!-- Sort By Dropdown -->
                <div class="dropdown-container">
                  <button class="control-btn dropdown-btn" on:click|stopPropagation={toggleDropdown}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="4" y1="6" x2="20" y2="6" stroke-width="2" stroke-linecap="round"/>
                      <line x1="4" y1="12" x2="20" y2="12" stroke-width="2" stroke-linecap="round"/>
                      <line x1="4" y1="18" x2="20" y2="18" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Sort By
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="chevron" class:open={dropdownOpen}>
                      <polyline points="6 9 12 15 18 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </button>
                  
                  {#if dropdownOpen}
                    <div class="dropdown-menu">
                      <form action="?/sort" method="post">
                        <input type="hidden" name="sortby" value="inquiry_id" />
                        <button type="submit" class="dropdown-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M3 3h18v18H3z" stroke-width="2"/>
                            <path d="M9 9h6M9 15h6" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                          Client ID
                        </button>
                      </form>
                      <form action="?/sort" method="post">
                        <input type="hidden" name="sortby" value="date" />
                        <button type="submit" class="dropdown-item">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                            <line x1="9" y1="2" x2="9" y2="6" stroke-width="2" stroke-linecap="round"/>
                            <line x1="15" y1="2" x2="15" y2="6" stroke-width="2" stroke-linecap="round"/>
                          </svg>
                          Appointment Date
                        </button>
                      </form>
                    </div>
                  {/if}
                </div>

                <!-- Toggle Handled/Unhandled -->
                <form action="?/toggleHandled" method="post" class="inline-form">
                  <input type="hidden" name="showHandled" value={data.showHandled ? "false" : "true"} />
                  <button type="submit" class="control-btn toggle-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="9 11 12 14 22 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {data.showHandled ? "Show Unhandled" : "Show Handled"}
                  </button>
                </form>

                <!-- Finalize Booking Button -->
                <button class="control-btn finalize-btn" on:click={() => (window.location.href = "/finalizeBook/")}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <polyline points="14 2 14 8 20 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="12" y1="18" x2="12" y2="12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <line x1="9" y1="15" x2="15" y2="15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Finalize Booking
                </button>
              </div>
            </th>
          </tr>
          <tr class="header-row">
            <th>Client ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Caliper Color</th>
            <th>Wheel Color</th>
            <th>Appointment Date</th>
            <th>Additional Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {#each data.inquiries as inquiry}
            <tr>
              <td data-label="Client ID">#{inquiry.inquiry_id}</td>
              <td data-label="Customer Name">{inquiry.first_name} {inquiry.last_name}</td>
              <td data-label="Phone">{inquiry.phone}</td>
              <td data-label="Service">{inquiry.service}</td>
              <td data-label="Caliper Color">{inquiry.caliper_color || "N/A"}</td>
              <td data-label="Wheel Color">{inquiry.wheel_color || "N/A"}</td>
              <td data-label="Appointment Date">{new Date(inquiry.date).toLocaleDateString()}</td>
              <td data-label="Additional Details">{inquiry.additional_details || "—"}</td>
              <td data-label="Actions">
                <div class="action-buttons">
                  {#if !data.showHandled}
                    <form action="?/markHandled" method="post" class="inline-form">
                      <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                      <button class="action-btn handled-btn">Mark Handled</button>
                    </form>
                    <button
                      class="action-btn book-btn"
                      class:booked={inquiry.book_status}
                      on:click={() => handleBooking(inquiry.inquiry_id)}
                      disabled={inquiry.book_status || loadingButtonId === inquiry.inquiry_id}
                    >
                      {loadingButtonId === inquiry.inquiry_id ? "Booking..." : inquiry.book_status ? "Booked!" : "Book"}
                    </button>
                  {:else}
                    <form action="?/undoHandled" method="post" class="inline-form">
                      <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                      <button class="action-btn undo-btn">Undo</button>
                    </form>
                    <form action="?/deleteInquiry" method="post" class="inline-form">
                      <input type="hidden" name="inquiry_id" value={inquiry.inquiry_id} />
                      <button class="action-btn delete-btn">Delete</button>
                    </form>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{:else}
  <div class="empty-state">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#52c4f5">
      <circle cx="12" cy="12" r="10" stroke-width="2"/>
      <path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <p class="empty-title">No inquiries found</p>
    <p class="empty-subtitle">
      {data?.showHandled ? "All inquiries are currently unhandled" : "All inquiries have been handled"}
    </p>
    <div class="empty-actions">
      <form action="?/toggleHandled" method="post">
        <input type="hidden" name="showHandled" value={data?.showHandled ? "false" : "true"} />
        <button class="control-btn">{data?.showHandled ? "View Unhandled" : "View Handled"}</button>
      </form>
      <button class="control-btn" on:click={() => (window.location.href = "/public")}>← Home</button>
    </div>
  </div>
{/if}

<style>
  .page-container {
    padding: 1rem;
    max-width: 100%;
    background: #000;
  }

  .page-title {
    text-align: center;
    color: #52c4f5;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 20px rgba(82, 196, 245, 0.3);
  }

  .messages-container {
    margin: 0 auto 1.5rem;
    max-width: 600px;
  }

  .success-message {
    background: rgba(62, 225, 62, 0.2);
    color: #3ee13e;
    padding: 1rem 1.5rem;
    margin-bottom: 0.75rem;
    border-radius: 8px;
    border: 1px solid #3ee13e;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 4px 12px rgba(62, 225, 62, 0.1);
  }

  .table-wrapper {
    overflow-x: auto;
    border-radius: 8px;
    border: 2px solid rgba(82, 196, 245, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
    -webkit-overflow-scrolling: touch;
    background: #0a0a0a;
  }

  .inquiries-table {
    width: 100%;
    border-collapse: collapse;
    background: #0a0a0a;
  }

  .controls-row {
    background: #0f0f0f;
  }

  .controls-row th {
    padding: 0;
    border-bottom: 1px solid rgba(82, 196, 245, 0.2);
  }

  .table-controls {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    flex-wrap: wrap;
  }

  .inline-form {
    display: inline-block;
    margin: 0;
  }

  .control-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.65rem 1.25rem;
    background: rgba(82, 196, 245, 0.15);
    color: #52c4f5;
    border: 1px solid rgba(82, 196, 245, 0.3);
    border-radius: 6px;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .control-btn:hover {
    background: rgba(82, 196, 245, 0.25);
    border-color: #52c4f5;
    box-shadow: 0 0 15px rgba(82, 196, 245, 0.2);
  }

  .dropdown-container {
    position: relative;
  }

  .dropdown-btn {
    position: relative;
  }

  .chevron {
    transition: transform 0.3s ease;
  }

  .chevron.open {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    background: #1a1a1a;
    border: 1px solid rgba(82, 196, 245, 0.3);
    border-radius: 6px;
    min-width: 200px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);
    z-index: 1000;
    overflow: hidden;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1rem;
    background: transparent;
    color: #52c4f5;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .dropdown-item:hover {
    background: rgba(82, 196, 245, 0.15);
  }

  .finalize-btn {
    background: rgba(147, 51, 234, 0.15);
    color: #a855f7;
    border: 2px solid rgba(147, 51, 234, 0.3);
    margin-left: auto;
    max-width: 200px;

  }

  .finalize-btn:hover {
    background: rgba(147, 51, 234, 0.25);
    border-color: #a855f7;
    box-shadow: 0 0 15px rgba(147, 51, 234, 0.2);
  }

  .header-row {
    background: #1a1a1a;
  }

  .header-row th {
    padding: 1rem 0.75rem;
    color: #52c4f5;
    font-weight: 600;
    text-align: center;
    border-right: 1px solid rgba(82, 196, 245, 0.15);
    border-bottom: 1px solid rgba(82, 196, 245, 0.3);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .header-row th:last-child {
    border-right: none;
  }

  tbody tr {
    transition: all 0.2s ease;
    background: #0000004c;
  }

  tbody tr:nth-child(even) {
    background: #21202086;
  }

  tbody tr:hover {
    background: rgba(169, 56, 206, 0.208);
  }

  tbody td {
    padding: 1rem 0.75rem;
    border-right: 1px solid rgba(82, 196, 245, 0.15);
    border-bottom: 1px solid rgba(82, 196, 245, 0.1);
    color: #e0e0e0;
    text-align: center;
    font-size: 0.9rem;
  }

  tbody td:last-child {
    border-right: none;
  }

  .action-buttons {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .action-btn {
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-radius: 5px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .handled-btn {
    background: rgba(82, 196, 245, 0.15);
    color: #52c4f5;
    border-color: rgba(82, 196, 245, 0.3);
  }

  .handled-btn:hover {
    background: rgba(82, 196, 245, 0.25);
    border-color: #52c4f5;
  }

  .book-btn {
    background: rgba(62, 225, 62, 0.15);
    color: #3ee13e;
    border-color: rgba(62, 225, 62, 0.3);
  }

  .book-btn:hover:not(:disabled) {
    background: rgba(62, 225, 62, 0.25);
    border-color: #3ee13e;
  }

  .book-btn.booked,
  .book-btn:disabled {
    background: rgba(102, 102, 102, 0.15);
    color: #666;
    border-color: rgba(102, 102, 102, 0.3);
    cursor: not-allowed;
  }

  .undo-btn {
    background: rgba(245, 158, 11, 0.15);
    color: #f59e0b;
    border-color: rgba(245, 158, 11, 0.3);
  }

  .undo-btn:hover {
    background: rgba(245, 158, 11, 0.25);
    border-color: #f59e0b;
  }

  .delete-btn {
    background: rgba(220, 38, 38, 0.15);
    color: #ef4444;
    border-color: rgba(220, 38, 38, 0.3);
  }

  .delete-btn:hover {
    background: rgba(220, 38, 38, 0.25);
    border-color: #ef4444;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 1.5rem;
    padding: 2rem;
  }

  .empty-title {
    font-size: 1.5rem;
    color: #52c4f5;
    font-weight: 700;
    margin: 0;
  }

  .empty-subtitle {
    color: #666;
    margin: 0;
  }

  .empty-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .page-title {
      font-size: 1.5rem;
    }

    .table-controls {
      gap: 0.5rem;
    }

    .control-btn {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    .finalize-btn {
      margin-left: 0;
      width: 100%;
    }

    .header-row th {
      font-size: 0.75rem;
      padding: 0.75rem 0.5rem;
    }

    tbody td {
      font-size: 0.8rem;
      padding: 0.75rem 0.5rem;
    }

    .action-btn {
      padding: 0.4rem 0.75rem;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .page-title {
      font-size: 1.25rem;
    }

    .table-controls {
      flex-direction: column;
      align-items: stretch;
    }

    .control-btn,
    .dropdown-btn,
    .toggle-btn {
      width: 100%;
      justify-content: center;
    }
  }
</style>